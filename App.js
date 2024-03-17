import React , {useState}from 'react'
import './App.css';
import Dashboard from '../src/pages/dashBoard/dashBoard';
import AddWidgets from '../src/pages/addWidgets/addwidgets'
function App() {
  const [value,setValue] = useState(false);
  const update = (value) => {
    setValue((prevValue) => !prevValue);
  }
  return (
    <div className="App">
      <Dashboard value = {value} update = {update}/>
      <AddWidgets value = {value} update = {update}/>
    </div>
  );
}

export default App
