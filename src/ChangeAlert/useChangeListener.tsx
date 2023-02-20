import React from "react";

function useChangeListener(setSyncTodo){

    const [storageChange, setStorageChange] = React.useState(false)

    window.addEventListener('storage', (change)=>{
        if(change.key == 'TODOS_V1'){
            console.warn('las cosas han cambiado beibi')
            setStorageChange(true)
        }
    })
    function synctTodos(){
        setStorageChange(setStorageChange(true))
        setSyncTodo()
    }
    return {storageChange,
            refresh:synctTodos}
    }
    
        

export {useChangeListener}