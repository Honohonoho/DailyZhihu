import React, { Component } from 'react'

import './style/HeaderBar.scss'


class HeaderBar extends Component {
  render(){
    return(
      <div className="header-bar">
        <div className="menu-icon">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-menu"></use>
          </svg>
        </div>
        <div className="home-icon">
          <p>首页</p>
        </div>
        <div className="ring-icon">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-naoling"></use>
          </svg>
        </div>
        <div className="night-icon">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-more_android"></use>
          </svg>
        </div>
      </div>
    )
  }
}
export default HeaderBar