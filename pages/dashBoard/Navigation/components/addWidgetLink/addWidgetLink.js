import React from 'react'
import Plus from '../../../../../images/Plus.png'
import '../addWidgetLink/addWidgetLink.css'
function AddWidgetLink(props) {
  const handleChange = () =>
  {  
    console.log(typeof(props.update));
     props.update(props.value);
  }
  return (
    <>
      <button id='addWidgetLink_btn' onClick={handleChange}>
         <img id = 'addWidgetLink_btn_plus' src = {Plus} alt = 'Plus'/>
         <text id ='addWidgetLink_btn_text'>Add Widget</text>
      </button>
    </>
  )
}

export default AddWidgetLink