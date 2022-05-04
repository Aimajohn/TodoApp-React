import React from "react";

function withChangeListener(WrapperComponent){
    return function WrapperwithChangeListener(props){

        const [storageChange, setStorageChange] = React.useState(false)

        window.addEventListener('storage', (change)=>{
            if(change.key == 'TODOS_V1'){
                console.warn('las cosas han cambiado beibi')
                setStorageChange(true)
            }
        })
        function synctTodos(){
            setStorageChange(setStorageChange(true))
            console.log(props)
            props.setSyncTodo()
        }
        return (<WrapperComponent 
            storageChange={storageChange}
            refresh= {synctTodos}
        />)
        
            
    }

}

export {withChangeListener}