import React from 'react'

const Task = ({obj,arrobj}) => {
  return (
    <div>
        {obj?<div><h1>{obj.type} Component</h1>
      <h3>Tea Name: {obj.name}</h3>
      <p></p>
      <p>Origin: {obj.orgine}</p>
      <p>Description: {obj.des}</p>
      
      </div>:<div><h1>Hard Code</h1>
      <h3>Tea Name: Green Tea</h3>
      <p></p>
      <p>Origin: China</p>
      <p>Description: Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas.</p>
      </div>
      }
   
{
    
 arrobj?<div><h3>Using Map</h3>
{ arrobj.map((obj)=>{
        return(<div>
            <h2></h2>
            <h3>Tea Name: {obj.name}</h3>
      <p></p>
      <p>Origin: {obj.orgine}</p>
      <p>Description: {obj.des}</p>
        </div>)
    })}
 </div>
    :''
}

 
    </div>
  )
}

export default Task
