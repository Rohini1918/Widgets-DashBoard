import React from 'react'
import home_img from '../../../../../images/home.png'
import '../home/home.css'
function home() {
  return (
    <section id='home'>
       <img id = 'home_img'  src={home_img} alt='home_img'/>
    </section>
  )
}

export default home