import React from "react";
import './TodoCounter.css'
import {FaGrinWink} from 'react-icons/fa'
function TodoCounter({children, completedTodos, filtered}){
    return(
      <div className="TodoCounter">
      <h2>
        <p>GETTING</p>
        <p><span>SH</span>IT</p>
        <p>DONE <FaGrinWink/></p>
        <p>{completedTodos} de {filtered.length}</p>
        </h2>
        {children}
      </div>

    )
}

export {TodoCounter}