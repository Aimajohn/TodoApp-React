import React, { ReactEventHandler } from "react";
import './TodoForm.css'
import '../TodoSearch/TodoSearch.css'
function TodoForm({onAdd, setModal}:FormProps){
    const [newTodoText, setnewTodoText] = React.useState('')

    function onCancel(){
        setModal(false)
    }
    function onChange(event:React.ChangeEvent<HTMLTextAreaElement>){
        setnewTodoText(event.target.value)
    }

    function onAddTodo(event:React.FormEvent<HTMLFormElement>){
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

type FormProps = {
    onAdd(value:string):void ;
    setModal(value:boolean):void;
}

export {TodoForm}