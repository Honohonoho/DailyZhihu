import React, { Component } from 'react'

import HeaderBar from './components/container/HeaderBar'
import SideBar from './components/container/SideBar'
import MainPage from './components/container/MainPage'

import './App.css'

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
