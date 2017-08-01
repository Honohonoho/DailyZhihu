import React, { Component } from 'react'

import LocalUrl from './LocalUrl'

import './style/TodayNews.scss'

class TodayNews extends Component {
  constructor(props){
    super(props)
    this.state = {
      storiesList: []
    }
  }
  componentDidMount(){
    let path = LocalUrl + '/api/4/news/latest'
    fetch(path)
      .then( resopnse => {
        return resopnse.json()
      })
      .then( data => {
        this.getStoryItem(data)
      })
      .catch( e => {
        console.log('Oops, error', e)
      })

  }
  getStoryItem(data){
    let stories = []
    data.stories.map( item => {
      return stories.push(item)
    })
    console.log(stories)
    this.setState({storiesList: stories})
  }
  getStoryId(id){
    let path = '/story/' + id
    return path
  }
  render(){
    return(
      <div className="today-news">
        <p>今日热闻</p>
        <div className="stories">
          {this.state.storiesList.map( (item,index) => {
            return(
              <div className="storyItem" key={index}>
                <a to={this.getStoryId(item.id)}>
                  <img src={item.images[0]} alt=""/>
                  <p className="title">{item.title}</p>
                </a>
              </div>
            )
          })}
        </div>
      </div>  
    )
  }
}
export default TodayNews