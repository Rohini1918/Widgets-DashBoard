import React from 'react'
import '../widget-008/widget-008.css'
import Three_dot_ion from '../../../../src/images/widget-1_icon.png'
import Data from '../../../json_data/data.json'
import Chart from '../widget-008/chart/chart'
function Widget008() {
  const widget8 = Data.filter((widget) => widget.name==='widget-008')[0];
  const days8 = widget8.number_of_days;
  if(widget8 === undefined)
  { 
    return ;
  }
  const day8 = days8.map((d) =>
    <li id = 'day8'key={d.toString()}>{d}</li>
  ); 
  return (
    <section id = 'widget-008'>
      <section id='widget-008_section-1'>
          <ul id='days8'>{day8}</ul>
          <img id = 'threedots_icon8' src = {Three_dot_ion} alt = 'widget.icon1'/>
        </section>
        <hr id='widget-008_section-1_header1'/>
        <section id='widget-008_section-2'>
          <Chart/>
        </section>
        <hr id='widget-008_section-2_header'/>
        <section id='widget-008_section-3'>
          <section id='widget-008_section-3_data1'>
            <p id='widget-008_section-3_data1_text'>
            Christmas25
            </p>
            <p id='widget-008_section-3_data1_count'>
            5,700
            </p>
          </section>
          <section id='widget-008_section-3_data2'>
            <p id='widget-008_section-3_data2_text'>
            BirthdaySpecial25
            </p>
            <p id='widget-008_section-3_data2_count'>
            27,000
            </p>
          </section>
          <section id='widget-008_section-3_data3'>
            <p id='widget-008_section-3_data3_text'>
            Newuser30
            </p>
            <p id='widget-008_section-3_data3_count'>
            12,500
            </p>
          </section>
          <section id='widget-008_section-3_data4'>
            <p id='widget-008_section-3_data4_text'>
            Newuser30
            </p>
            <p id='widget-008_section-3_data4_count'>
            16,000
            </p>
          </section>
          <section id='widget-008_section-3_data5'>
            <p id='widget-008_section-3_data5_text'>
            Newuser30
            </p>
            <p id='widget-008_section-3_data5_count'>
            17,500
            </p>
          </section>
        </section>
    </section>
  )
}

export default Widget008