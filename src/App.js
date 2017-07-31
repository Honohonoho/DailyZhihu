import React, { Component } from 'react'

import HeaderBar from './components/HeaderBar'
import SideBar from './components/SideBar'
import MainPage from './components/MainPage'

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
