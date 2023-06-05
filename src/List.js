import React, { useState } from 'react'


export default function List({task, remove, done, removeTask, editTask, index, id, taskDone }) {

  const[checkState, setCheckState] = useState(true)
  

  return <li > 
  <span  onClick={ ()=> setCheckState(false)} className="spanchik">{ checkState ? task : 
  <input onBlur={ ()=> setCheckState(true)} onChange={event =>editTask(event, id) }/> } </span>

  <span onClick={() => removeTask(index)}>{remove} </span>

  <span onClick={(event) => taskDone(event) }>{done} </span>
</li>
}