import React from 'react'
import '../plus/plus.css'
import Plus_Navigation from '../../../../../images/Plus_navigation.png'
function Plus() {
  return (
    <section id='Navigation_plus_link'>
       <button id='Navigation_plus_link_btn'>
         <img id='Navigation_plus_link_btn_img' src = {Plus_Navigation} alt = 'Plus_Navigation'/>
       </button>
    </section>
  )
}

export default Plus