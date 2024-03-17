import React from 'react'
import '../widget-005/widget-005.css'
import Three_dot_ion from '../../../../src/images/widget-1_icon.png'
import Data from '../../../json_data/data.json'
function Widget005() {
  const widget5 = Data.filter((widget) => widget.name==='widget-005')[0];
  const days5 = widget5.number_of_days;
  if(widget5 === undefined)
  { 
    return ;
  }
  const day5 = days5.map((d) =>
    <li id = 'day5'key={d.toString()}>{d}</li>
  );
  const table5 = widget5.table;
  return (
    <section id = 'widget-005'>
      <section id = 'widget-005_section-1'>
      <ul id='days5'>{day5}</ul>
          <img id = 'threedots_icon5' src = {Three_dot_ion} alt = 'widget.icon1'/>
      </section>
      <hr id='widget-005_section-1_header'/>
      <section id = 'widget-005_section-2'>
        <table>
          <tr id='widget5_table_mainrow'>
            <th id='widget5_table_mainrow_column-1'>
              {table5['title-column-1']}
            </th>
            <th id='widget5_table_mainrow_column-2'>
            {table5['title-column-2']}
            </th>
            <th id='widget5_table_mainrow_column-3'>
            {table5['title-column-3']}
            </th>
          </tr>
          <tr id='widget5_table_firstrow'>
            <th id = 'widget5_table_firstrow_column-1'>
               {table5['data_column-1'][0]}
            </th>
            <th id = 'widget5_table_firstrow_column-2'>
              {table5['data_column-2'][0]}
            </th>
            <th id = 'widget5_table_firstrow_column-3'>
            {table5['data_column-3'][0]}
            </th>
          </tr>
          <tr id='widget5_table_secondrow'>
            <th id = 'widget5_table_secondrow_column-1'>
               {table5['data_column-1'][1]}
            </th>
            <th id = 'widget5_table_secondrow_column-2'>
              {table5['data_column-2'][1]}
            </th>
            <th id = 'widget5_table_secondrow_column-3'>
            {table5['data_column-3'][1]}
            </th>
          </tr>
          <tr id='widget5_table_thirdrow'>
            <th id = 'widget5_table_thirdrow_column-1'>
               {table5['data_column-1'][2]}
            </th>
            <th id = 'widget5_table_thirdrow_column-2'>
              {table5['data_column-2'][2]}
            </th>
            <th id = 'widget5_table_thirdrow_column-3'>
            {table5['data_column-3'][2]}
            </th>
          </tr>
          <tr id='widget5_table_fourthrow'>
            <th id = 'widget5_table_fourthrow_column-1'>
               {table5['data_column-1'][3]}
            </th>
            <th id = 'widget5_table_fourthrow_column-2'>
              {table5['data_column-2'][3]}
            </th>
            <th id = 'widget5_table_fourthrow_column-3'>
            {table5['data_column-3'][3]}
            </th>
          </tr>
          <tr id='widget5_table_fifthrow'>
            <th id = 'widget5_table_fifthrow_column-1'>
               {table5['data_column-1'][4]}
            </th>
            <th id = 'widget5_table_fifthrow_column-2'>
              {table5['data_column-2'][4]}
            </th>
            <th id = 'widget5_table_fifthrow_column-3'>
            {table5['data_column-3'][4]}
            </th>
          </tr>
        </table>
      </section>

    </section>
  )
}

export default Widget005