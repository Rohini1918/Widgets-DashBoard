import React from 'react'
import '../widget-001/widget-001.css'
import Three_dot_ion from '../../../../src/images/widget-1_icon.png'
import Data from '../../../json_data/data.json'
import Rectangle246 from '../../../images/Rectangle 246.png'
import Rectangle245 from '../../../images/Rectangle 245.png'
import Rectangle247 from '../../../images/Rectangle 247.png'
import Rectangle206 from '../../../images/Rectangle 206.png'
import Rectangle207 from '../../../images/Rectangle 207.png'
import Chart from '../widget-001/chart/chart'
function Widget1() {
  const widget1 = Data.filter((widget) => widget.name==='widget-001')[0];
  const days1 = widget1.number_of_days;
  if(widget1 === undefined)
  { 
    return ;
  }
  const day1 = days1.map((d) =>
    <li id = 'day1'key={d.toString()}>{d}</li>
  ); 
  return (
    <section id='widget001'>
        <section id='widget-001_section-1'>
          <ul id='days1'>{day1}</ul>
          <img id = 'threedots_icon1' src = {Three_dot_ion} alt = 'widget.icon1'/>
        </section>
        <hr id='widget-001_section-1_header1'/>
        <section id='widget-001_section-2'>
          <Chart/>
        </section>
        <hr id='widget-001_section-2_header'/>
        <section id='widget-001_section-3'>
          <section id='widget-001_section-3_data1'>
            <img id = 'widget-001_section-3_data1_img' src = {Rectangle246} alt='Rectangle246'/>
            <p id='widget-001_section-3_data1_text'>
            Christmas25
            </p>
            <p id='widget-001_section-3_data1_count'>
            5,700
            </p>
          </section>
          <section id='widget-001_section-3_data2'>
            <img id = 'widget-001_section-3_data2_img' src = {Rectangle245} alt='Rectangle246'/>
            <p id='widget-001_section-3_data2_text'>
            BirthdaySpecial25
            </p>
            <p id='widget-001_section-3_data2_count'>
            27,000
            </p>
          </section>
          <section id='widget-001_section-3_data3'>
            <img id = 'widget-001_section-3_data3_img' src = {Rectangle247} alt='Rectangle246'/>
            <p id='widget-001_section-3_data3_text'>
            Newuser30
            </p>
            <p id='widget-001_section-3_data3_count'>
            12,500
            </p>
          </section>
          <img id='widget-001_section-3_scroll-1' src={Rectangle206} alt='Rectangle206'/>
          <img id='widget-001_section-3_scroll-2'src={Rectangle207} alt='Rectangle207'/>
        </section>
    </section>
  )
}

export default Widget1