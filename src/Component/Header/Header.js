import React from 'react'
import "./Header.css"
import {PlayCircleOutlined , QqOutlined} from "@ant-design/icons"
function Header() {
  return (
    <div className='headers'>
<div><PlayCircleOutlined /></div>
<div className='right_head'>
    <div><input className='inputs' type="text" placeholder="search"></input></div>
    <div><QqOutlined /></div>
</div>
        
    </div>
  )
}

export default Header