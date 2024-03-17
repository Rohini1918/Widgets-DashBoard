import React from 'react'
import '../widget-012/widget-012.css'
import DropDown from '../../../../src/images/dropdown12.png'
import ThreeDotsIcon from '../../../../src/images/ThreeDots12.png'
function Widget012() {
  return (
     <section id = 'widget-012'>
        <section id = 'widget-012_section-1'>
          <p id = 'widget-012_section-1_today'>Today</p>
          <img id = 'widget-012_section-1_img-1' src = {DropDown} alt = 'DropDown'/>
          <img id = 'widget-012_section-1_img-2' src = {ThreeDotsIcon} alt = 'ThreeDotsIcon' />
          <p id = 'widget-012_section-1_text'>
          Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with 5007 and 4785 emails opened respectively. There is a noticeable drop in 
          </p>
        </section>
     </section>
  )
}

export default Widget012