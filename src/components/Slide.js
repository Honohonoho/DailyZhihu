import React, { Component } from 'react'

import LocalUrl from './LocalUrl'
import './style/Slide.scss'

class Slide extends Component {
  constructor(props){
    super(props)
    this.state = {
      topStoriesList: []
    }
  }
  componentDidMount(){
    let path = LocalUrl + '/api/4/news/latest'
    fetch(path)
      .then( resopnse => {
        return resopnse.json()
      })
      .then( data => {
        this.getTopStoryItem(data)
      })
      .catch( e => {
        console.log('Oops, error', e)
      })
  }
  getTopStoryItem(data){
    let topStories = []
    data.top_stories.map( item => {
      return topStories.push(item)
    })
    this.setState({topStoriesList: topStories})
    console.log(this.state.topStoriesList)
  }

  render(){
    return(
      <div className="slide">
        <div className="slide-wrapper">
          {this.state.topStoriesList.map( (item,index) => {
            return (
              <div className="slide-item" key={index}>
                <a href="">
                  <div className="item-mask"></div>
                  <div className="item-pic">
                    <img src={item.image} alt=""/>
                  </div>
                  <p className="item-title">{item.title}</p>
                </a>
              </div>
            )
          })}
        </div>
        <div className="slide-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>  
    )
  }
}
export default Slide