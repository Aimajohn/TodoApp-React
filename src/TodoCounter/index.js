import React from "react";
import './TodoCounter.css'
import {TodoContext} from '../TodoContext'
function TodoCounter(props){
  const {completedTodos, filtered} = React.useContext(TodoContext)
    return(
      <div className="TodoCounter">
      <h2>
        <p>GETTING</p>
        <p><span>SH</span>IT</p>
        <p>DONE.</p>
        <p>{completedTodos} de {filtered.length}</p>
        </h2>
        {props.children}
      </div>

    )
}

export {TodoCounter}