import React from 'react'
import '../widget-002/widget-002.css'
import Three_dot_ion from '../../../../src/images/widget-1_icon.png'
import Data from '../../../json_data/data.json'
import Chart from '../widget-002/chart/chart'
function Widget002() {
  const widget2 = Data.filter((widget) => widget.name==='widget-002')[0];
  const days2 = widget2.number_of_days;
  if(widget2 === undefined)
  { 
    return ;
  }
  const day2 = days2.map((d) =>
    <li id = 'day2'key={d.toString()}>{d}</li>
  );
  const table2 = widget2.table;
  return (
    <section id = 'widget-002'>
      <section id = 'widget-002_section-1'>
      <ul id='days2'>{day2}</ul>
          <img id = 'threedots_icon2' src = {Three_dot_ion} alt = 'widget.icon1'/>
      </section>
      <hr id='widget-002_section-1_header'/>
      <section id = 'widget-002_section-2'>
        <Chart/>
      </section>
    </section>
  )
}

export default Widget002