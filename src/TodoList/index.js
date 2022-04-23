import React from "react";
import "./TodoList.css"
function TodoList (props){
    return(
        <li className="TodoList">
        {props.children}
        </li>
    )
}
export {TodoList}