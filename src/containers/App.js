import React, { Component } from 'react'

import HeaderBar from './HeaderBar'
import SideBar from './SideBar'
import MainPage from './MainPage'

import './style/App.css'

class App extends Component {
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
