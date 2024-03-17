import React from 'react'
import Navigation from '../dashBoard/Navigation/navigation'
import SideBarNavigation from '../dashBoard/sideBarNavigation/sideBarNavigation'
import Widgets from '../dashBoard/Widgets/widgets'
import '../dashBoard/dashBoard.css'
function dashBoard(props) {
  return (
    <section id='dashBoard'>
      <Navigation  value = {props.value} update = {props.update}/>
      <SideBarNavigation/>
      <Widgets/>
    </section>
  )
}

export default dashBoard