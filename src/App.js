import React,{useEffect,useState} from "react"

import './App.css';
import Stopwatch from "./components/stopwatch";
import Todo from "./components/Todo";

function App() {
  return(
    <div className="App">
      {/* <Todo/> */}
      <Stopwatch start={10} endtime={20}/>
    </div>
  )
  
}

export default App;
