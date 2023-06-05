import React, { useState } from 'react'
import uuid from 'react-uuid';
import List from "./List";

export default function App() {
  let obj =[
    {id: uuid(), task: 'помыть машину', remove : 'удалить', done: 'сделано' },
  ] 

  const [notes, setNotes ] = useState(obj)
  const [value, setValue] = useState('');

  // const[checkState, setCheckState] = useState(false)

  let result =  notes.map( (note, index) => {
  return  <List 
    key={note.id}
    id={note.id}
    index={index}
    task={note.task}
    remove={note.remove}
    done={note.done}
    removeTask={removeTask}
    editTask={editTask}
    taskDone={taskDone}
  />
  })

  function addTask(){
    if(value !== ''){
      let res = notes.slice()
      let newObj ={}
      newObj['id'] =  uuid()
      newObj['task'] = value
      newObj['remove'] = 'удалить'
      newObj['done'] = 'сделано'
      res.push(newObj)

      setNotes(res)
      setValue('')
    }
  }

  function removeTask(index) {  
    let copy = notes.slice()
    copy.splice(index, 1)
    setNotes(copy)
  }

  function editTask(event, id ) {
    setNotes(notes.map(note => {
      if(note.id === id){
        note['task'] = event.target.value
        note['remove'] = 'удалить'
        note['done'] = 'сделано'
      return note
      }
      return note
    }))
  }

  function taskDone(event) {
    event.target.previousElementSibling.previousElementSibling.className =  'taskDone' 
  }

  function inputValue(event) {
  setValue(event.target.value);
}
  

  return <div>
    <input value={value} onChange={inputValue}/>
    <button onClick={addTask}>button</button>
    <ul>
      {result}
    </ul>
  </div>
  
}


