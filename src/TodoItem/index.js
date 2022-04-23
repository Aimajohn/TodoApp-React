import React from "react";
import './TodoItem.css';
function TodoItem (props){
    
    return(
        <ul className="TodoItem">
            <button type="Button" className={props.completed?"material-icons-outlined checked checkedDone": "material-icons-outlined checked"}  onClick={props.onDone}>done</button>
            <div className={`TodoButton ${props.completed && "itemDone"}`} >
            <p>
            {props.text}
            </p>
            <button type="Button" onClick={props.onDelete} className="material-icons-outlined delete">close</button>
            </div>
        </ul>
    )
}

export {TodoItem}