import React from 'react'
import '../widget-013/widget-013.css'
import Three_dot_ion from '../../../../src/images/widget-1_icon.png'
import Data from '../../../json_data/data.json'
function Widget013() {
  const widget13 = Data.filter((widget) => widget.name==='widget-013')[0];
  const days13 = widget13.number_of_days;
  if(widget13 === undefined)
  { 
    return ;
  }
  const day13 = days13.map((d) =>
    <li id = 'day13'key={d.toString()}>{d}</li>
  );
  const table13 = widget13.table;
  return (
    <section id='widget-013'>
      <section id = 'widget-013_section-1'>
      <ul id='days13'>{day13}</ul>
          <img id = 'threedots_icon13' src = {Three_dot_ion} alt = 'widget.icon1'/>
      </section>
      <hr id='widget-013_section-1_header'/>
      <section id = 'widget-013_section-2'>
        <table>
          <tr id='widget13_table_mainrow'>
            <th id='widget13_table_mainrow_column-1'>
              {table13['title-column-1']}
            </th>
            <th id='widget13_table_mainrow_column-2'>
            {table13['title-column-2']}
            </th>
            <th id='widget13_table_mainrow_column-3'>
            {table13['title-column-3']}
            </th>
          </tr>
          <tr id='widget13_table_firstrow'>
            <th id = 'widget13_table_firstrow_column-1'>
               {table13['data_column-1'][0]}
            </th>
            <th id = 'widget13_table_firstrow_column-2'>
              {table13['data_column-2'][0]}
            </th>
            <th id = 'widget13_table_firstrow_column-3'>
            {table13['data_column-3'][0]}
            </th>
          </tr>
          <tr id='widget13_table_secondrow'>
            <th id = 'widget13_table_secondrow_column-1'>
               {table13['data_column-1'][1]}
            </th>
            <th id = 'widget13_table_secondrow_column-2'>
              {table13['data_column-2'][1]}
            </th>
            <th id = 'widget13_table_secondrow_column-3'>
            {table13['data_column-3'][1]}
            </th>
          </tr>
          <tr id='widget13_table_thirdrow'>
            <th id = 'widget13_table_thirdrow_column-1'>
               {table13['data_column-1'][2]}
            </th>
            <th id = 'widget13_table_thirdrow_column-2'>
              {table13['data_column-2'][2]}
            </th>
            <th id = 'widget13_table_thirdrow_column-3'>
            {table13['data_column-3'][2]}
            </th>
          </tr>
          <tr id='widget13_table_fourthrow'>
            <th id = 'widget13_table_fourthrow_column-1'>
               {table13['data_column-1'][3]}
            </th>
            <th id = 'widget13_table_fourthrow_column-2'>
              {table13['data_column-2'][3]}
            </th>
            <th id = 'widget13_table_fourthrow_column-3'>
            {table13['data_column-3'][3]}
            </th>
          </tr>
          <tr id='widget13_table_fifthrow'>
            <th id = 'widget13_table_fifthrow_column-1'>
               {table13['data_column-1'][4]}
            </th>
            <th id = 'widget13_table_fifthrow_column-2'>
              {table13['data_column-2'][4]}
            </th>
            <th id = 'widget13_table_fifthrow_column-3'>
            {table13['data_column-3'][4]}
            </th>
          </tr>
        </table>
      </section>
      <section id = 'widget-004_section-2'>
      </section>
    </section>
  )
}

export default Widget013