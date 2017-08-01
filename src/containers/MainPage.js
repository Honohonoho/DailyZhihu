import React, { Component } from 'react'

import TodayNews from '../components/TodayNews'
import Slide from '../components/Slide'

import './style/MainPage.scss'

class MainPage extends Component {
  render(){
    return(
      <div className="main-page">
        <Slide />
        <TodayNews />
      </div>  
    )
  }
}
export default MainPage