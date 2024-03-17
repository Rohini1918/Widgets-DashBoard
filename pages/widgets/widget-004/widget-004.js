import React from 'react'
import '../widget-004/widget-004.css'
import Three_dot_ion from '../../../../src/images/widget-1_icon.png'
import Data from '../../../json_data/data.json'
function Widget004() {
  const widget4 = Data.filter((widget) => widget.name==='widget-004')[0];
  const days4 = widget4.number_of_days;
  if(widget4 === undefined)
  { 
    return ;
  }
  const day4 = days4.map((d) =>
    <li id = 'day4'key={d.toString()}>{d}</li>
  );
  const table4 = widget4.table;
  return (
    <section id = 'widget-004'>
      <section id = 'widget-004_section-1'>
      <ul id='days4'>{day4}</ul>
          <img id = 'threedots_icon4' src = {Three_dot_ion} alt = 'widget.icon1'/>
      </section>
      <hr id='widget-004_section-1_header'/>
      <section id = 'widget-004_section-2'>
        <table>
          <tr id='widget4_table_mainrow'>
            <th id='widget4_table_mainrow_column-1_w4'>
              {table4['title-column-1']}
            </th>
            <th id='widget4_table_mainrow_column-2_w4'>
            {table4['title-column-2']}
            </th>
            <th id='widget4_table_mainrow_column-3_w4'>
            {table4['title-column-3']}
            </th>
          </tr>
          <tr id='widget4_table_firstrow'>
            <th id = 'widget4_table_firstrow_column-1_w4'>
               {table4['data_column-1'][0]}
            </th>
            <th id = 'widget4_table_firstrow_column-2_w4'>
              {table4['data_column-2'][0]}
            </th>
            <th id = 'widget4_table_firstrow_column-3_w4'>
            {table4['data_column-3'][0]}
            </th>
          </tr>
          <tr id='widget4_table_secondrow'>
            <th id = 'widget4_table_secondrow_column-1_w4'>
               {table4['data_column-1'][1]}
            </th>
            <th id = 'widget4_table_secondrow_column-2_w4'>
              {table4['data_column-2'][1]}
            </th>
            <th id = 'widget4_table_secondrow_column-3_w4'>
            {table4['data_column-3'][1]}
            </th>
          </tr>
          <tr id='widget4_table_thirdrow'>
            <th id = 'widget4_table_thirdrow_column-1_w4'>
               {table4['data_column-1'][2]}
            </th>
            <th id = 'widget4_table_thirdrow_column-2_w4'>
              {table4['data_column-2'][2]}
            </th>
            <th id = 'widget4_table_thirdrow_column-3_w4'>
            {table4['data_column-3'][2]}
            </th>
          </tr>
          <tr id='widget4_table_fourthrow'>
            <th id = 'widget4_table_fourthrow_column-1_w4'>
               {table4['data_column-1'][3]}
            </th>
            <th id = 'widget4_table_fourthrow_column-2_w4'>
              {table4['data_column-2'][3]}
            </th>
            <th id = 'widget4_table_fourthrow_column-3_w4'>
            {table4['data_column-3'][3]}
            </th>
          </tr>
          <tr id='widget4_table_fifthrow'>
            <th id = 'widget4_table_fifthrow_column-1_w4'>
               {table4['data_column-1'][4]}
            </th>
            <th id = 'widget4_table_fifthrow_column-2_w4'>
              {table4['data_column-2'][4]}
            </th>
            <th id = 'widget4_table_fifthrow_column-3_w4'>
            {table4['data_column-3'][4]}
            </th>
          </tr>
        </table>
      </section>
      <section id = 'widget-004_section-2'>
      </section>
    </section>
  )
}

export default Widget004