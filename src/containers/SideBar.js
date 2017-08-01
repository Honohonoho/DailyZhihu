import React, { Component } from 'react'

import LocalUrl from '../components/LocalUrl'

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
        console.log(data)
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
  render(){
    return(
      <div className="side-bar">
        <div className="side-bar-header">
          <div className="user">
            <div className="avator">
              <img src="" alt=""/>
            </div>
            <div className="username">李祺</div>
          </div>
          <div className="information">
            <a href="">
              GitHub地址
            </a>
          </div>
        </div>
        <div className="side-bar-list">
          <div className="title">
            <p>首页</p>
          </div>
          {this.state.subscribedList.map( (item,index) => {
            return(
              <div className="subs-item">
                <p className="item-name">{item.name}</p>
                <p>+</p>
              </div>
            )
          })}
        </div>
        <div className="side-bar-mask"></div>
      </div>
    )
  }
}
export default SideBar