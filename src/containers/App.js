import React, { Component } from 'react'

import HeaderBar from './HeaderBar'
import SideBar from './SideBar'
import MainPage from './MainPage'

import './style/App.scss'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showSideBar: true
    }
  }
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <SideBar />
        <MainPage />
      </div>
    )
  }
}

export default App
