import React from "react";
import {useChangeListener} from './useChangeListener'
import './ChangeAlert.css'
function TodoChange({setSyncTodo}){
    const {storageChange, refresh} = useChangeListener(setSyncTodo)
    if(storageChange){
        return(
            <div className="changeAlertContainer">
                <div className="changeAlert">

                <p>Hubo cambios en tu lista que necesitan actualizarse. </p>
                <button className="refreshButton "
                onClick={
                    ()=>{
                        refresh()
                    }
                }
                >Actualizar Pagina</button>
                </div>

            </div>
        )
    }else{
        return null;
    }
}

export {TodoChange}