import React from 'react'
import '../widget-011/widget-011.css'
import Three_dot_ion from '../../../../src/images/widget-1_icon.png'
import Data from '../../../json_data/data.json'
import BarChart from '../widget-011/chart11/chart11'
import DropDown from '../../../../src/images/dropdown12.png'
import ThreeDotsIcon from '../../../../src/images/ThreeDots12.png'
  const widget11_1 = Data.filter((widget) => widget.name==='widget-011')[0]['section-1'];
  const widget11_2 = Data.filter((widget) => widget.name==='widget-011')[0]['section-2'];
  const days11 = widget11_1.number_of_days;
  console.log(widget11_1)
  const day11 = days11.map((d) =>
    <li id = 'day11'key={d.toString()}>{d}</li>
  );
  const days11_2 = widget11_2.number_of_days;
  const day11_2 = days11_2.map((d) =>
    <li id = 'day11_2'key={d.toString()}>{d}</li>
  );
  const table11_2 = widget11_2.table;
function Widget011() {
  return (
    <section id = 'widget-011'>
      <section id = 'widget-011-1'>
          <ul id='days11'>{day11}</ul>
          <img id = 'threedots_icon11' src = {Three_dot_ion} alt = 'widget.icon1'/>
          <hr id='widget-011_section-1_header'/>
          <BarChart/>
      </section>
      <section id = 'widget-011-2'>
      <section id = 'widget-011-2_section-1'>
      <ul id='days11_2'>{day11_2}</ul>
          <img id = 'threedots_icon11_2' src = {Three_dot_ion} alt = 'widget.icon1'/>
      </section>
      <hr id='widget-011_2_section-1_header'/>
      <section id = 'widget-011_2_section-2'>
        <table>
          <tr id='widget11_2_table_mainrow'>
            <th id='widget11_2_table_mainrow_column-1'>
              {table11_2['title-column-1']}
            </th>
            <th id='widget11_2_table_mainrow_column-2'>
            {table11_2['title-column-2']}
            </th>
            <th id='widget11_2_table_mainrow_column-3'>
            {table11_2['title-column-3']}
            </th>
          </tr>
          <tr id='widget11_2_table_firstrow'>
            <th id = 'widget11_2_table_firstrow_column-1'>
               {table11_2['data_column-1'][0]}
            </th>
            <th id = 'widget11_2_table_firstrow_column-2'>
              {table11_2['data_column-2'][0]}
            </th>
            <th id = 'widget11_2_table_firstrow_column-3'>
            {table11_2['data_column-3'][0]}
            </th>
          </tr>
          <tr id='widget11_2_table_secondrow'>
            <th id = 'widget11_2_table_secondrow_column-1'>
               {table11_2['data_column-1'][1]}
            </th>
            <th id = 'widget11_2_table_secondrow_column-2'>
              {table11_2['data_column-2'][1]}
            </th>
            <th id = 'widget11_2_table_secondrow_column-3'>
            {table11_2['data_column-3'][1]}
            </th>
          </tr>
          <tr id='widget11_2_table_thirdrow'>
            <th id = 'widget11_2_table_thirdrow_column-1'>
               {table11_2['data_column-1'][2]}
            </th>
            <th id = 'widget11_2_table_thirdrow_column-2'>
              {table11_2['data_column-2'][2]}
            </th>
            <th id = 'widget11_2_table_thirdrow_column-3'>
            {table11_2['data_column-3'][2]}
            </th>
          </tr>
          <tr id='widget11_2_table_fourthrow'>
            <th id = 'widget11_2_table_fourthrow_column-1'>
               {table11_2['data_column-1'][3]}
            </th>
            <th id = 'widget11_2_table_fourthrow_column-2'>
              {table11_2['data_column-2'][3]}
            </th>
            <th id = 'widget11_2_table_fourthrow_column-3'>
            {table11_2['data_column-3'][3]}
            </th>
          </tr>
          <tr id='widget11_2_table_fifthrow'>
            <th id = 'widget11_2_table_fifthrow_column-1'>
               {table11_2['data_column-1'][4]}
            </th>
            <th id = 'widget11_2_table_fifthrow_column-2'>
              {table11_2['data_column-2'][4]}
            </th>
            <th id = 'widget11_2_table_fifthrow_column-3'>
            {table11_2['data_column-3'][4]}
            </th>
          </tr>
        </table>
      </section>
      <section id = 'widget-004_section-2'>
      </section>
      </section>
      <section id = 'widget-011-3'>
      <section id = 'widget-011_3_section-1'>
          <p id = 'widget-011_3_section-1_today'>Today</p>
          <img id = 'widget-011_3_section-1_img-1' src = {DropDown} alt = 'DropDown'/>
          <img id = 'widget-011_3_section-1_img-2' src = {ThreeDotsIcon} alt = 'ThreeDotsIcon' />
          <p id = 'widget-011_3_section-1_text'>
          Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with 5007 and 4785 emails opened respectively. There is a noticeable drop in 
          </p>
        </section>
      </section>
    </section>
  )
}

export default Widget011