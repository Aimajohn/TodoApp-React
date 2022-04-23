import React from "react";
import './TodoButton.css'
function TodoButtom (){
    return (
      <button className="TodoButton" type='button'><span className="material-icons-round">
      add_circle
      </span> Añadir nueva nota</button>
        
    )
}
export {TodoButtom} 