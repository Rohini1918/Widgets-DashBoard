import React from 'react'
import '../widget-006/widget-006.css'
import Pie from '../widget-006/pie_chart/pie_chart'
import Data from '../../../json_data/data.json'
import Three_dot_ion from '../../../../src/images/widget-1_icon.png'
function Widget006() {
  const widget6 = Data.filter((widget) => widget.name==='widget-006')[0];
  const days6 = widget6.number_of_days;
  if(widget6 === undefined)
  { 
    return ;
  }
  const day6 = days6.map((d) =>
    <li id = 'day6'key={d.toString()}>{d}</li>
  );
  return (
    <section id = 'widget-006'>
      <section id = 'widget-006_section-1'>
      <ul id='days13'>{day6}</ul>
          <img id = 'threedots_icon06' src = {Three_dot_ion} alt = 'widget.icon1'/>
      </section>
      <hr id='widget-006_section-1_header'/>
      <section id = 'widget-006_section-2'>
        <Pie/>
      </section>
    </section>
  )
}

export default Widget006