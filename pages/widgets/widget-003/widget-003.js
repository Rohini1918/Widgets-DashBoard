import React from 'react'
import '../widget-003/widget-003.css'
import Three_dot_ion from '../../../../src/images/widget-1_icon.png'
import Data from '../../../json_data/data.json'
function Widget003() {
  const widget3 = Data.filter((widget) => widget.name==='widget-003')[0];
  const days3 = widget3.number_of_days;
  if(widget3 === undefined)
  { 
    return ;
  }
  const day3 = days3.map((d) =>
    <li id = 'day3'key={d.toString()}>{d}</li>
  );
  const table3 = widget3.table;
  return (
    <section id = 'widget003'>
      <section id = 'widget-003_section-1'>
      <ul id='days3'>{day3}</ul>
          <img id = 'threedots_icon3' src = {Three_dot_ion} alt = 'widget.icon1'/>
      </section>
      <hr id='widget-003_section-1_header'/>
      <section id = 'widget-003_section-2'>
        <table>
          <tr id='widget3_table_mainrow'>
            <th id='widget3_table_mainrow_column-1'>
              {table3['title-column-1']}
            </th>
            <th id='widget3_table_mainrow_column-2'>
            {table3['title-column-2']}
            </th>
            <th id='widget3_table_mainrow_column-3'>
            {table3['title-column-3']}
            </th>
            <th id='widget3_table_mainrow_column-4'>
            {table3['title-column-4']}
            </th>
            <th id='widget3_table_mainrow_column-5'>
            {table3['title-column-5']}
            </th>
            <th id='widget3_table_mainrow_column-6'>
            {table3['title-column-6']}
            </th>
          </tr>
          <tr id='widget3_table_firstrow'>
             <th id='widget3_table_firstrow_column-1'>
                {table3['data_column-1'][0]}
             </th>
             <th id='widget3_table_firstrow_column-2'>
                {table3['data_column-2'][0]}
             </th>
             <th id='widget3_table_firstrow_column-3'>
                {table3['data_column-3'][0]}
             </th>
             <th id='widget3_table_firstrow_column-4'>
                {table3['data_column-4'][0]}
             </th>
             <th id='widget3_table_firstrow_column-5'>
                {table3['data_column-5'][0]}
             </th>
             <th id='widget3_table_firstrow_column-6'>
                {table3['data_column-6'][0]}
             </th>
          </tr>
          <tr id='widget3_table_secondrow'>
             <th id='widget3_table_secondrow_column-1'>
                {table3['data_column-1'][1]}
             </th>
             <th id='widget3_table_secondrow_column-2'>
                {table3['data_column-2'][1]}
             </th>
             <th id='widget3_table_secondrow_column-3'>
                {table3['data_column-3'][1]}
             </th>
             <th id='widget3_table_secondrow_column-4'>
                {table3['data_column-4'][1]}
             </th>
             <th id='widget3_table_secondrow_column-5'>
                {table3['data_column-5'][1]}
             </th>
             <th id='widget3_table_secondrow_column-6'>
                {table3['data_column-6'][1]}
             </th>
          </tr>
          <tr id='widget3_table_thirdrow'>
             <th id='widget3_table_thirdrow_column-1'>
                {table3['data_column-1'][2]}
             </th>
             <th id='widget3_table_thirdrow_column-2'>
                {table3['data_column-2'][2]}
             </th>
             <th id='widget3_table_thirdrow_column-3'>
                {table3['data_column-3'][2]}
             </th>
             <th id='widget3_table_thirdrow_column-4'>
                {table3['data_column-4'][2]}
             </th>
             <th id='widget3_table_thirdrow_column-5'>
                {table3['data_column-5'][2]}
             </th>
             <th id='widget3_table_thirdrow_column-6'>
                {table3['data_column-6'][2]}
             </th>
          </tr>
          <tr id='widget3_table_fourthrow'>
             <th id='widget3_table_fourthrow_column-1'>
                {table3['data_column-1'][3]}
             </th>
             <th id='widget3_table_fourthrow_column-2'>
                {table3['data_column-2'][3]}
             </th>
             <th id='widget3_table_fourthrow_column-3'>
                {table3['data_column-3'][3]}
             </th>
             <th id='widget3_table_fourthrow_column-4'>
                {table3['data_column-4'][3]}
             </th>
             <th id='widget3_table_fourthrow_column-5'>
                {table3['data_column-5'][3]}
             </th>
             <th id='widget3_table_fourthrow_column-5'>
                {table3['data_column-6'][3]}
             </th>
          </tr>
          <tr id='widget3_table_fifthrow'>
             <th id='widget3_table_fifthrow_column-1'>
                {table3['data_column-1'][4]}
             </th>
             <th id='widget3_table_fifthrow_column-2'>
                {table3['data_column-2'][4]}
             </th>
             <th id='widget3_table_fifthrow_column-3'>
                {table3['data_column-3'][4]}
             </th>
             <th id='widget3_table_fifthrow_column-4'>
                {table3['data_column-4'][4]}
             </th>
             <th id='widget3_table_fifthrow_column-5'>
                {table3['data_column-5'][4]}
             </th>
             <th id='widget3_table_fifthrow_column-5'>
                {table3['data_column-6'][4]}
             </th>
          </tr>
          <tr id='widget3_table_sixthrow'>
             <th id='widget3_table_sixthrow_column-1'>
                {table3['data_column-1'][5]}
             </th>
             <th id='widget3_table_sixthrow_column-2'>
                {table3['data_column-2'][5]}
             </th>
             <th id='widget3_table_sixthrow_column-3'>
                {table3['data_column-3'][5]}
             </th>
             <th id='widget3_table_sixthrow_column-4'>
                {table3['data_column-4'][5]}
             </th>
             <th id='widget3_table_sixthrow_column-5'>
                {table3['data_column-5'][5]}
             </th>
          </tr>
          <tr id='widget3_table_seventhrow'>
             <th id='widget3_table_seventhrow_column-1'>
                {table3['data_column-1'][6]}
             </th>
             <th id='widget3_table_seventhrow_column-2'>
                {table3['data_column-2'][6]}
             </th>
             <th id='widget3_table_seventhrow_column-3'>
                {table3['data_column-3'][6]}
             </th>
             <th id='widget3_table_seventhrow_column-4'>
                {table3['data_column-4'][6]}
             </th>
             <th id='widget3_table_seventhrow_column-5'>
                {table3['data_column-5'][6]}
             </th>
          </tr>
          <tr id='widget3_table_eighthrow'>
             <th id='widget3_table_eighthrow_column-1'>
                {table3['data_column-1'][7]}
             </th>
             <th id='widget3_table_eighthrow_column-2'>
                {table3['data_column-2'][7]}
             </th>
             <th id='widget3_table_eighthrow_column-3'>
                {table3['data_column-3'][7]}
             </th>
             <th id='widget3_table_eighthrow_column-4'>
                {table3['data_column-4'][7]}
             </th>
             <th id='widget3_table_eighthrow_column-5'>
                {table3['data_column-5'][7]}
             </th>
          </tr>
          <tr id='widget3_table_ninthrow'>
             <th id='widget3_table_ninthrow_column-1'>
                {table3['data_column-1'][8]}
             </th>
             <th id='widget3_table_ninthrow_column-2'>
                {table3['data_column-2'][8]}
             </th>
             <th id='widget3_table_ninthrow_column-3'>
                {table3['data_column-3'][8]}
             </th>
             <th id='widget3_table_ninthrow_column-4'>
                {table3['data_column-4'][8]}
             </th>
             <th id='widget3_table_ninthrow_column-5'>
                {table3['data_column-5'][8]}
             </th>
          </tr>
          <tr id='widget3_table_tenthrow'>
             <th id='widget3_table_tenthrow_column-1'>
                {table3['data_column-1'][9]}
             </th>
             <th id='widget3_table_tenthrow_column-2'>
                {table3['data_column-2'][9]}
             </th>
             <th id='widget3_table_tenthrow_column-3'>
                {table3['data_column-3'][9]}
             </th>
             <th id='widget3_table_tenthrow_column-4'>
                {table3['data_column-4'][9]}
             </th>
             <th id='widget3_table_tenthrow_column-5'>
                {table3['data_column-5'][9]}
             </th>
          </tr>
          <tr id='widget3_table_eleventhrow'>
             <th id='widget3_table_eleventhrow_column-1'>
                {table3['data_column-1'][10]}
             </th>
             <th id='widget3_table_eleventhrow_column-2'>
                {table3['data_column-2'][10]}
             </th>
             <th id='widget3_table_eleventhrow_column-3'>
                {table3['data_column-3'][10]}
             </th>
             <th id='widget3_table_eleventhrow_column-4'>
                {table3['data_column-4'][10]}
             </th>
             <th id='widget3_table_eleventhrow_column-5'>
                {table3['data_column-5'][10]}
             </th>
          </tr>
          <tr id='widget3_table_twelthrow'>
             <th id='widget3_table_twelthrow_column-1'>
                {table3['data_column-1'][11]}
             </th>
             <th id='widget3_table_twelthrow_column-2'>
                {table3['data_column-2'][11]}
             </th>
             <th id='widget3_table_twelthrow_column-3'>
                {table3['data_column-3'][11]}
             </th>
             <th id='widget3_table_twelthrow_column-4'>
                {table3['data_column-4'][11]}
             </th>
             <th id='widget3_table_twelthrow_column-5'>
                {table3['data_column-5'][11]}
             </th>
          </tr>
          <tr id='widget3_table_thirteenrow'>
             <th id='widget3_table_thirteenrow_column-1'>
                {table3['data_column-1'][12]}
             </th>
             <th id='widget3_table_thirteenrow_column-2'>
                {table3['data_column-2'][12]}
             </th>
             <th id='widget3_table_thirteenrow_column-3'>
                {table3['data_column-3'][12]}
             </th>
             <th id='widget3_table_thirteenrow_column-4'>
                {table3['data_column-4'][12]}
             </th>
             <th id='widget3_table_thirteenrow_column-5'>
                {table3['data_column-5'][12]}
             </th>
          </tr>
        </table>
      </section>
    </section>
  )
}

export default Widget003