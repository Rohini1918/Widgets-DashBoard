import React from 'react'
import '../widget-010/widget-010.css'
import DropDownIcon from '../../../../src/images/drawDown.png'
import ThreeDots9 from '../../../images/ThreeDots9.png'
import Line from '../../../images/line_w9.png'
import Data from '../../../json_data/data.json'
function Widget010() {
  const widget10 = Data.filter((widget) => widget.name==='widget-010')[0];
  const table10 = widget10.table;
  return (
    <section id = 'widget-010'>
      <section id='widget-010_section-1'>
          <p id='widget-010_section-1_heading'>Today</p>
          <img id = 'widget-010_section-1_icon-1' src={DropDownIcon} alt='DropDownIcon'/>
          <img id='widget-010_section-1_icon-2' src = {ThreeDots9} alt='ThreeDots9'/>
        </section>
        <hr id='widget-010_section-1_header'/>
        <section id='widget-010_section-2'>
        <table>
          <tr id='widget10_table_mainrow'>
            <th id='widget10_table_mainrow_column-1'>
              {table10['title-column-1']}
            </th>
            <th id='widget10_table_mainrow_column-2'>
            {table10['title-column-2']}
            </th>
            <th id='widget10_table_mainrow_column-3'>
            {table10['title-column-3']}
            </th>
          </tr>
          <tr id='widget10_table_firstrow'>
            <th id = 'widget10_table_firstrow_column-1'>
               {table10['data_column-1'][0]}
            </th>
            <th id = 'widget10_table_firstrow_column-2'>
              {table10['data_column-2'][0]}
            </th>
            <th id = 'widget10_table_firstrow_column-3'>
            {table10['data_column-3'][0]}
            </th>
          </tr>
          <tr id='widget10_table_secondrow'>
            <th id = 'widget10_table_secondrow_column-1'>
               {table10['data_column-1'][1]}
            </th>
            <th id = 'widget10_table_secondrow_column-2'>
              {table10['data_column-2'][1]}
            </th>
            <th id = 'widget10_table_secondrow_column-3'>
            {table10['data_column-3'][1]}
            </th>
          </tr>
          <tr id='widget10_table_thirdrow'>
            <th id = 'widget10_table_thirdrow_column-1'>
               {table10['data_column-1'][2]}
            </th>
            <th id = 'widget10_table_thirdrow_column-2'>
              {table10['data_column-2'][2]}
            </th>
            <th id = 'widget10_table_thirdrow_column-3'>
            {table10['data_column-3'][2]}
            </th>
          </tr>
          <tr id='widget10_table_fourthrow'>
            <th id = 'widget10_table_fourthrow_column-1'>
               {table10['data_column-1'][3]}
            </th>
            <th id = 'widget10_table_fourthrow_column-2'>
              {table10['data_column-2'][3]}
            </th>
            <th id = 'widget10_table_fourthrow_column-3'>
            {table10['data_column-3'][3]}
            </th>
          </tr>
          <tr id='widget10_table_fifthrow'>
            <th id = 'widget10_table_fifthrow_column-1'>
               {table10['data_column-1'][4]}
            </th>
            <th id = 'widget10_table_fifthrow_column-2'>
              {table10['data_column-2'][4]}
            </th>
            <th id = 'widget10_table_fifthrow_column-3'>
            {table10['data_column-3'][4]}
            </th>
          </tr>
        </table>
        <img id='w10_line1' src={Line} alt='line'/>
        <img id='w10_line2' src={Line} alt='line'/>
        </section>
    </section>
  )
}

export default Widget010