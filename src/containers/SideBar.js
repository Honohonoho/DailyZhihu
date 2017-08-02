import React, { Component } from 'react'

import LocalUrl from '../components/LocalUrl'

import './style/SideBar.scss'
import Avator from './images/avator.jpg'

class SideBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      subscribedList: []
    }
  }
  componentDidMount(){
    let path = LocalUrl + '/api/4/themes'
    fetch(path)
      .then( resopnse => {
        return resopnse.json()
      })
      .then( data => {
        this.getSubscribedItem(data)
      })
      .catch( e => {
        console.log('Oops, error', e)
      })

  }
  getSubscribedItem(data){
    let subsList = []
    data.others.map( item => {
      return subsList.push(item)
    })
    console.log(subsList)
    this.setState({subscribedList: subsList})
  }
  renderSideBarItem(){
    let sidebaritems = this.state.subscribedList.map( (item) => {
      return(
        <div className="subs-item" key={item.id}>
          <p className="item-name">{item.name}</p>
          <p className="plus">+</p>
        </div>
      )
    })
    return sidebaritems
  }
  render(){
    return(
      <div className="side-bar">
        <div className="side-bar-wrapper">
          <div className="side-bar-header">
            <div className="user">
              <div className="avator">
                <img src={Avator} alt=""/>
              </div>
              <div className="username">李祺 (751718620@qq.com)</div>
            </div>
            <div className="information">
              <a href="">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-github"></use>
                </svg>
                GitHub地址
              </a>
            </div>
          </div>
          <div className="side-bar-list">
            <div className="title">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-shouye"></use>
              </svg>
              <p>首页</p>
            </div>
            {this.renderSideBarItem()}
          </div>
        </div>
        <div className="side-bar-mask"></div>
      </div>
    )
  }
}
export default SideBar