import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Form';
import Sign from './sign';
import Evl from './Evl';
import Task from './Tea';
function App() {
const obj={type:'dynamic',name:'green tea',orgine:'china',des:'This can make u young. most of the japence taking this tea so they are looking so young'}

const arrobj=[{name:'lemon tea',orgine:'USA',des:'This tea is found by one famous person called danial. The main advantage of this tea is it can clean our liver'},{name:'green tea',orgine:'china',des:'This can make u young. most of the japence taking this tea so they are looking so young'}]

  return(
<div>
<Task/>
<Task obj={obj}/>
<Task arrobj={arrobj}/>

</div>
  )


  
}

export default App;
