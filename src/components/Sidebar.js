import React from 'react'
import { SidebarData } from './SidebarData'
import SidebarIcon from "./SidebarIcon"

function Sidebar() {
  return (
    <div className='Sidebar'>
      <SidebarIcon />
      <ul className='Sidebar__list'>
        {SidebarData.map((value, key) => {
          return (
            <li key={key}
                className="row"
                id={window.location.pathname == value.link ? "active" : ""}
                onClick={() => {
              window.location.pathname = value.link;
            }}>
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
