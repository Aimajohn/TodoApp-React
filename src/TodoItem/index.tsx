import React from "react";
import './TodoItem.css';
import {CgClose} from 'react-icons/cg'
function TodoItem ({completed, onDone, text, onDelete}){
    
    return(
        <li className="TodoItem">
            <button type="Button" className={completed?"material-icons-outlined checked checkedDone": "material-icons-outlined checked"}  onClick={onDone}>done</button>
            <div className={`TodoItemButton ${completed && "itemDone"}`} >
            <p>
            {text}
            </p>
            <button type="Button" onClick={onDelete} className="material-icons-outlined delete">
            <CgClose/>
            </button>
            
            </div>
        </li>
    )
}

export {TodoItem}