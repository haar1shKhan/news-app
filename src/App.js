import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
        <Route path='/' element={<News key='general' newsItem="6" categories='general' countries='in'/>}/>
        <Route path='/business' element={<News key='business' newsItem="6" categories='business' countries='in'/>}/>
        <Route path='/sports' element={<News key='sports' newsItem="6" categories='sports' countries='in'/>}/>
        <Route path='/science' element={<News key='science' newsItem="6" categories='science' countries='in'/>}/>
        <Route path='/health' element={<News key='health' newsItem="6" categories='health' countries='in'/>}/>
        <Route path='/entertainment' element={<News key='entertainment' newsItem="6" categories='entertainment' countries='in'/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}
