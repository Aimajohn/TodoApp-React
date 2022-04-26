import React from "react";
import './TodoCounter.css'
function TodoCounter(props){

    return(
      <div className="TodoCounter">
      <h2>
        <p>GETTING</p>
        <p><span>SH</span>IT</p>
        <p>DONE.</p>
        <p>{props.completedTodos} de {props.allTodos}</p>
        </h2>
        {props.children}
      </div>

    )
}

export {TodoCounter}