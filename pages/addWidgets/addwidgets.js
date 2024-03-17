import React, { useState } from 'react'
import '../addWidgets/addwidgets.css'
import Nav_img from '../../images/Navigation.png'
import CrossMark from '../../images/crossMark.png'
import crossMark2 from '../../images/crossMark2.png'
import CounterClockWise from '../../images/counter-clockwise-clock.png'
import Bar from '../../images/BarChart_Icon.png'
import Line from '../../images/line_chart.png'
import Pie from '../../images/pie_chart.png'
import Data from '../addWidgets/data.json'
import Three_dot_icon from '../../images/widget-1_icon.png'
function Addwidgets(props) {
  const [crossMark,setCrossMark] = useState(true);
  const Widget = Data.filter(widget => widget.name === "widget_frame")[0];
  const days = Widget.number_of_days;
  if(Widget === undefined)
  { 
    return ;
  }
  const day = days.map((d) =>
    <li id = 'day'key={d.toString()}>{d}</li>
  );
  const table = Widget.table;
  const handleChange = () =>
  {  
    console.log(typeof(props.update));
     props.update(props.value);
  }
  return (
    <section id = {props.value ? 'addwidget_open' : 'addwidget_close'}>
      <section id='widget_data'>
        <section id='Nav_item'>
          <img id='Nav_item_img' src = {Nav_img} alt = 'Nav_img'/>
        </section>
      </section>
      <section id='Background_circles'>
        <section id='Background_circles_content'>
          <div id='Background_circles_content_circle-1'></div>
          <div id='Background_circles_content_circle-2'></div>
          <div id='Background_circles_content_circle-3'></div>
          <div id='Background_circles_content_circle-4'></div>
          <div id='Background_circles_content_circle-5'></div>
          <div id='Background_circles_content_circle-6'></div>
          <div id='Background_circles_content_circle-7'></div>
        </section>
        {/* <section id='Background_circles_mask'>
        </section> */}
        <section id='create_widget_text'>Create Widget
        </section>
        <section id='supporting_text'>Manage the glossary of terms of your Database.</section>
      </section>
      <button id='cancel_btn' onClick={handleChange}>
        <img id='cancel_img' src = {CrossMark}/>
      </button>
      <hr id='header_after_heading'></hr>
      <secton id = 'input_with_button'>
        <input type='button' id='input_with_button_text' value = 'Reusability Scores'>
        </input>
        <button id={crossMark ? 'cross_mark_button_open' : 'cross_mark_button_close' } onClick={() =>setCrossMark((prev) => !prev)}>
          <img src = {crossMark2}/>
        </button>
      </secton>
      <section id='cancel_save_buttons'>
        <button id = 'counter_clockwise'>
          <img id='counter_clockwise_img' src = {CounterClockWise} alt ='counterClockWise'/>
        </button>
        <button id='cancel'>
          <p id='cancel_text'>Cancel</p>
        </button>
        <button id='save'>
          <p id='save_text'>Save</p>
        </button>
      </section>
      <section id='components'>Components</section>
      <section id='data_container'>
        <p id='data_container_data'>Data</p>
        <br/>
        <p id='data_container_desc'>Random Description</p>
      </section>
      <section id='graph'>
        <p id='graph_graph'>Graph</p>
        <p id = 'graph_desc'>Random Description</p>
        <section id='graph_icons'>
          <button id='bar_graph_btn'>
            <img id='bar_graph_img' src = {Bar} alt = 'bar'/>
          </button>
          <button id='line_chart_btn'>
            <img id = 'line_chart_img' src = {Line} alt = 'Line'/>
          </button>
          <button id='pie_chart_btn'>
            <img id='pie_chart_img' src = {Pie} from alt = ' pie'/>
          </button>
        </section>
      </section>
      <section id='summary'>
        <p id='summary_text'>Summary</p>
        <br/>
        <p id='summary_desc'>Random Description</p>
      </section>
      <section id='create_widget_box'>
           <section id='other_widgets'>
              <section id='rectangle-1'></section>
              <section id='rectangle-2'></section>
              <section id='rectangle-3'></section>
              <section id='rectangle-4'></section>
              <section id='rectangle-5'></section>
              <p id='reusability_scores'>REUSABILITY SCORES</p>
              <section id='widget_frame'>
              <section id = 'widget_section-1'>
      <ul id='days'>{day}</ul>
          <img id = 'threedots_icon' src = {Three_dot_icon} alt = 'widget.icon'/>
      </section>
      <hr id='widget_section-1_header'/>
      <section id = 'widget_section-2'>
        <table>
          <tr id='widget_table_mainrow'>
            <th id='widget_table_mainrow_column-1'>
              {table['title-column-1']}
            </th>
            <th id='widget_table_mainrow_column-2'>
            {table['title-column-2']}
            </th>
            <th id='widget_table_mainrow_column-3'>
            {table['title-column-3']}
            </th>
          </tr>
          <tr id='widget_table_firstrow'>
            <th id = 'widget_table_firstrow_column-1'>
               {table['data_column-1'][0]}
            </th>
            <th id = 'widget_table_firstrow_column-2'>
              {table['data_column-2'][0]}
            </th>
            <th id = 'widget_table_firstrow_column-3'>
            {table['data_column-3'][0]}
            </th>
          </tr>
          <tr id='widget_table_secondrow'>
            <th id = 'widget_table_secondrow_column-1'>
               {table['data_column-1'][1]}
            </th>
            <th id = 'widget_table_secondrow_column-2'>
              {table['data_column-2'][1]}
            </th>
            <th id = 'widget_table_secondrow_column-3'>
            {table['data_column-3'][1]}
            </th>
          </tr>
          <tr id='widget_table_thirdrow'>
            <th id = 'widget_table_thirdrow_column-1'>
               {table['data_column-1'][2]}
            </th>
            <th id = 'widget_table_thirdrow_column-2'>
              {table['data_column-2'][2]}
            </th>
            <th id = 'widget_table_thirdrow_column-3'>
            {table['data_column-3'][2]}
            </th>
          </tr>
          <tr id='widget_table_fourthrow'>
            <th id = 'widget_table_fourthrow_column-1'>
               {table['data_column-1'][3]}
            </th>
            <th id = 'widget_table_fourthrow_column-2'>
              {table['data_column-2'][3]}
            </th>
            <th id = 'widget_table_fourthrow_column-3'>
            {table['data_column-3'][3]}
            </th>
          </tr>
          <tr id='widget_table_fifthrow'>
            <th id = 'widget_table_fifthrow_column-1'>
               {table['data_column-1'][4]}
            </th>
            <th id = 'widget_table_fifthrow_column-2'>
              {table['data_column-2'][4]}
            </th>
            <th id = 'widget_table_fifthrow_column-3'>
            {table['data_column-3'][4]}
            </th>
          </tr>
        </table>
      </section>
              </section>
           </section>
      </section>
    </section>
  )
}

export default Addwidgets;