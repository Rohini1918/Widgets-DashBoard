import React from 'react'
import '../widget-007/widget-007.css'
import Three_dot_ion from '../../../../src/images/widget-1_icon.png'
import Data from '../../../json_data/data.json'
import Chart from '../widget-007/chart/chart'
function Widget007() {
  const widget7 = Data.filter((widget) => widget.name==='widget-007')[0];
  const days7 = widget7.number_of_days;
  if(widget7 === undefined)
  { 
    return ;
  }
  const day7 = days7.map((d) =>
    <li id = 'day7'key={d.toString()}>{d}</li>
  );
  return (
    <section id = 'widget-007'>
       <section id='widget-007_section-1'>
          <ul id='days7'>{day7}</ul>
          <img id = 'threedots_icon7' src = {Three_dot_ion} alt = 'widget.icon1'/>
        </section>
        <hr id='widget-007_section-1_header'/>
        <section id='widget-007_section-2'>
           <Chart/>
        </section>
    </section>
  )
}

export default Widget007