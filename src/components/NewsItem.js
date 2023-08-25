import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let{title,desc,imagesUrl,newsUrl,author,date,source} = this.props;
    return (
      <div> 
      
         <div className="card" style={{width: '18rem',height:"28rem"}}>
         <span  style={{left:"84%",zIndex:'1'}} className="position-absolute top-0  translate-middle badge rounded-pill bg-danger">{source}</span>
             <img src={imagesUrl} className="card-img-top" style={{objectFit:'Cover',height:"10rem",}} alt="..."/>
                 <div className="card-body">
                     <h5 className="card-title">{title}...</h5>
                     <p className="card-text">{desc}...</p>
                     <p className="card-text"><small className="text-muted">By {author} {date}</small></p>
                     <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark">Go somewhere</a>
                </div>
         </div>
      </div>
    )
  }
}

export default NewsItem
