import React, { useState } from 'react'
import '../links/links.css'
import Cross_Mark from '../../../../../images/cross_mark.png'
function Links() {
  const [img_d_o,setImg_d_o] = useState(false);
  const [img_d_c,setImg_d_c] = useState(false);
  const [img_d_p,setImg_d_p] = useState(false);
  const [img_d_s,setImg_d_s] = useState(false);
  return (
    <section id = 'navigation_links'>
      <button id = 'navigation_link_overview' onClick={() => setImg_d_o(!img_d_o)}>
         <text id = 'navigation_link_overview_text'>
            Overview
         </text>
         <img id = {img_d_o ===true ? 'navigation_link_overview_img' : 'navigation_link_overview_img_closed'} src = {Cross_Mark} alt = 'Cross_mark'/>
      </button>
      <button id = 'navigation_link_customer' onClick={() => setImg_d_c(!img_d_c)}>
         <text id = 'navigation_link_customer_text'>
            Customer
         </text>
         <img id = {img_d_c ===true ? 'navigation_link_customer_img' : 'navigation_link_customer_img_closed'} src = {Cross_Mark} alt = 'Cross_mark'/>
      </button>
      <button id = 'navigation_link_products' onClick={() => setImg_d_p(!img_d_p)}>
          <text id = 'navigation_link_products_text'>
             Products
          </text>
          <img id = {img_d_p ===true ? 'navigation_link_products_img' : 'navigation_link_products_img_closed'} src = {Cross_Mark} alt = 'Cross_mark'/>
      </button>
      <button id = 'navigation_link_settings' onClick={() => setImg_d_s(!img_d_s)}>
          <text id = 'navigation_link_settings_text'>
             Settings
          </text>
          <img id = {img_d_s ===true ? 'navigation_link_settings_img' : 'navigation_link_settings_img_closed'} src = {Cross_Mark} alt = 'Cross_mark'/>
      </button>
    </section>
  )
}

export default Links