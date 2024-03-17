import React from 'react'
import '../Navigation/navigation.css'
import Home from '../Navigation/components/home/home'
import Links from '../Navigation/components/links/links'
import Plus from '../Navigation/components/plus/plus'
import AddWidgetsLink from '../Navigation/components/addWidgetLink/addWidgetLink'
import Settings_logo from '../Navigation/components/settings_logo/settings_logo'
function Navigation(props) {
  return (
    <section id ='navigation'>
        <Home/>
        <Links/>
        <Plus/>
        <AddWidgetsLink  value = {props.value} update = {props.update}/>
        <Settings_logo/> 
    </section>
  )
}

export default Navigation