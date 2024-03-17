import React from 'react'
import Avatar from '../../../images/Avatar.png'
import '../sideBarNavigation/sideBarNavigation.css'
import Header_img_side_Navigation from '../../../images/L2493.png'
import Navigation_1_img from '../../../images/Navigation_1_Icon.png'
import Message_icon from '../../../images/Message_Icon.png'
import Layers_Icon from '../../../images/Layers_Icon.png'
import BarChart_Icon from '../../../images/BarChart_Icon.png'
function sideBarNavigation() {
  return (
    <section id='sideBarNavigation'>
      <section id='sideBarNavigation_content'>
         <section id='sideBarNavigation_content_navigation'>
            <section id='sideBarNavigation_content_navigation_header'>
              <img id='sideBarNavigation_content_navigation_header_img' src={Header_img_side_Navigation} alt='Header_img_side_Navigation' />
            </section>
            <section id='sideBarNavigation_content_navigation_navigation'>
                <section id='sideBarNavigation_content_navigation_navigation-1'>
                  <a href = "D:\Crux_frontend\assignment\src\pages\dashBoard\dashBoard.js" id =  'sideBarNavigation_content_navigation_navigation-1_link'> 
                      <img id = 'sideBarNavigation_content_navigation_navigation-1_link_img' src = {Navigation_1_img} alt='Navigation_1_img'/>
                  </a>
                </section>
                <section id='sideBarNavigation_content_navigation_navigation-2'>
                    <a href = "D:\Crux_frontend\assignment\src\pages\dashBoard\dashBoard.js" id = 'sideBarNavigation_content_navigation_navigation-2_link'>
                      <img id = 'sideBarNavigation_content_navigation_navigation-2_link_img' src = {Message_icon} alt='Navigation_2_img'/>
                    </a>
                </section>
                <section id='sideBarNavigation_content_navigation_navigation-3'>
                    <a href = "D:\Crux_frontend\assignment\src\pages\dashBoard\dashBoard.js" id='sideBarNavigation_content_navigation_navigation-3_link'>
                      <img id = 'sideBarNavigation_content_navigation_navigation-3_link_img' src = {Layers_Icon} alt='Navigation_3_img'/>
                    </a>
                </section>
                <section id='sideBarNavigation_content_navigation_navigation-4'>
                    <a href = "D:\Crux_frontend\assignment\src\pages\dashBoard\dashBoard.js" id = 'sideBarNavigation_content_navigation_navigation-4_link'>
                      <img id = 'sideBarNavigation_content_navigation_navigation-4_link_img' src = {BarChart_Icon} alt='Navigation_4_img'/>
                      </a>
                </section>
            </section>
         </section>
         <section id='sideBarNavigation_content_footer'>
              <img id = 'sideBarNavigation_content_footer_avatar_img' src = {Avatar} alt = 'Avatar'/>
         </section>
      </section>
    </section>
  )
}

export default sideBarNavigation