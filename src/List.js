import React, { useState } from 'react'


export default function List({task, remove, done, removeTask, editTask, index, id, taskDone }) {

  const[checkState, setCheckState] = useState(true)
  

  return <li > 
  <span  onClick={ ()=> setCheckState(false)} className="edit">{ checkState ? task : 
  <input onBlur={ ()=> setCheckState(true)} onChange={event =>editTask(event, id) }/> } </span>

  <span  onClick={() => removeTask(index)} className="remove">{remove} </span>

  <span  onClick={(event) => taskDone(event)} className="done">{done} </span>
</li>
}