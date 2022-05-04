import React from "react";
import {withChangeListener} from './withChangeListener'
import './ChangeAlert.css'
function TodoChange({storageChange, refresh}){
    
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

const ChangeStorageListener =  withChangeListener(TodoChange)
export {ChangeStorageListener}