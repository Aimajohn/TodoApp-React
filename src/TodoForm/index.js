import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'
import '../TodoSearch/TodoSearch.css'
function TodoForm(){
    const {onAdd, setModal} = React.useContext(TodoContext)
    const [newTodoText, setnewTodoText] = React.useState('')

    function onCancel(){
        setModal(false)
    }
    function onChange(event){
        setnewTodoText(event.target.value)
    }

    function onAddTodo(event){
        event.preventDefault()
        onAdd(newTodoText)
        setModal(false)
    }


    return(
        <form onSubmit={onAddTodo}>
            <label className="newTodoPopTitle">Escribe una tarea</label>
            <textarea className="todoInput textareaTodo" value={newTodoText} onChange={onChange}  placeholder="Pelar cebollas"></textarea>
            <div className="buttonsContainer">
                <button className="newTodoButton newTodoCancel"  onClick={onCancel} type="button">Cancelar</button>
                <button className="newTodoSubmit newTodoButton" type="submit">Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm}