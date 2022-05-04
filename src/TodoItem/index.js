import React from "react";
import './TodoItem.css';
import {CgClose} from 'react-icons/cg'
function TodoItem (props){
    
    return(
        <li className="TodoItem">
            <button type="Button" className={props.completed?"material-icons-outlined checked checkedDone": "material-icons-outlined checked"}  onClick={props.onDone}>done</button>
            <div className={`TodoItemButton ${props.completed && "itemDone"}`} >
            <p>
            {props.text}
            </p>
            <button type="Button" onClick={props.onDelete} className="material-icons-outlined delete">
            <CgClose/>
            </button>
            
            </div>
        </li>
    )
}

export {TodoItem}