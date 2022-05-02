import React from "react";
import './TodoButton.css'
function TodoButtom ({setModal, modal}){
    return (
      <button onClick={()=>setModal(prevState=>!prevState)} className="TodoButton" type='button'><span className="material-icons-round">
      add
      </span></button>
        
    )
}
export {TodoButtom} 