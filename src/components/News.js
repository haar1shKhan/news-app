import React, { Component } from 'react'
import Loading from './Loading'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroller';
//99d28b43825c4e9a9c42c73207651b3d

export class News extends Component {

    static propsDefaults={

    }
    
    static propsTypes={
        
    }
   
        
        constructor(){
            super()
            this.state={
                article:[],
                page:1,
                loading:false
            }
            console.log("yo")
        }
        async componentDidMount(){
    
           let url=`https://newsapi.org/v2/top-headlines?country=${this.props.countries}&category=${this.props.categories}&apiKey=99d28b43825c4e9a9c42c73207651b3d&page=1&pageSize=${this.props.newsItem}`
           this.setState({loading:true})
           let data = await fetch(url)
           let parseData = await data.json()
           console.log(parseData)
           this.setState({article:parseData.articles,
            loading:false}) 
        }

        handleNext=async()=>{
            if(this.state.page+1>Math.ceil(this.state.totalResult/20)){


            }else{

                console.log('next')
                let url=`https://newsapi.org/v2/top-headlines?country=${this.props.countries}&category=${this.props.categories}&apiKey=99d28b43825c4e9a9c42c73207651b3d&page=${this.state.page+1}&pageSize=${this.props.newsItem}`
                this.setState({loading:true})
                let data = await fetch(url)
                let parseData = await data.json()
                console.log(parseData)
                this.setState({
                    article:parseData.articles,
                    page: this.state.page+1,
                    totalResult:parseData.totalResults,
                    loading:false
                }) 
            }
        }
        handlePrev= async ()=>{
            console.log('prev')     
            
                let url=`https://newsapi.org/v2/top-headlines?country=${this.props.countries}&category=${this.props.categories}&apiKey=99d28b43825c4e9a9c42c73207651b3d&page=${this.state.page-1}&pageSize=${this.props.newsItem}`
                this.setState({loading:true})
                let data = await fetch(url)
                let parseData = await data.json()
                console.log(parseData)
                this.setState({
                    article:parseData.articles,
                    page: this.state.page-1,
                    loading:false
                })   
            
        }

        fetchItems=async()=>{
            this.setState({ page: this.state.page + 1 })
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.countries}&category=${this.props.categories}&apiKey=99d28b43825c4e9a9c42c73207651b3d&page=${this.state.page-1}&pageSize=${this.props.newsItem}`
                this.setState({loading:true})
                let data = await fetch(url)
                let parseData = await data.json()
                console.log(parseData)
                this.setState({
                    article:this.state.article.concat(parseData.articles),  
                    loading:false
                })   

        }

  render() {
    return (
      <div className='container my-3'>
        <h2>Top headlines</h2>
        {this.state.loading&&<Loading/>}
            {/* <InfiniteScroll
                dataLenght={this.state.article.length }
                next ={this.fetchItems}
                loadMore={this.fetchItems}
                hasMore={this.state.article.length!==this.state.totalResult}
                loader={<Loading/>}
            > */}
                <div className='row mt-3'>
        {!this.state.loading&&this.state.article.map((elements)=>{
                return <div key={elements.url}className='col-md-4 my-2'>
                <NewsItem title={elements.title?elements.title.slice(0,44):""} desc={elements.description?elements.description.slice(0,88):'For more information click the link below'} 
                imagesUrl={elements.urlToImage?elements.urlToImage:"https://iitpkd.ac.in/sites/default/files/default_images/default-news-image_0.png"} newsUrl={elements.url}
                author={!elements.author?"Unknown":elements.author} date={elements.publishedAt} source={elements.source.name}/> 
                </div>
            })}
     
        </div>
            {/* </InfiniteScroll> */}
        <div className="container d-flex justify-content-between mt-4">
            <button type="button" disabled ={this.state.page<=1}className="btn btn-dark"  onClick={this.handlePrev}>&larr;</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNext}>&rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
