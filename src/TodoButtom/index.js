import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoButton.css'
function TodoButtom (){
  const {setModal, modal} = React.useContext(TodoContext)
    return (
      <button onClick={()=>setModal(prevState=>!prevState)} className="TodoButton" type='button'><span className="material-icons-round">
      add
      </span></button>
        
    )
}
export {TodoButtom} 