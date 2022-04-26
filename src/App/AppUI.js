import React from "react";
import {TodoCounter} from '../TodoCounter'
import {TodoButtom} from '../TodoButtom'
import {TodoItem} from '../TodoItem'
import {TodoList} from '../TodoList'
import {TodoSearch} from '../TodoSearch'
function AppUI({
    loading,
    error,
    completedTodos,
    allTodos,
    setSearchValue,
    searchValue,
    onDelete,
    onDone,
    filtered}){
    return (
        <main className='App'>
            <TodoCounter
                completedTodos={completedTodos}
                allTodos={allTodos}
            >
                <img src='/HD-wallpaper-fire-minimalist-blue-minimal-flat.png' className='headerImg' alt="" />
            </TodoCounter>
            <TodoSearch
                setSearchValue={setSearchValue}
                searchValue={searchValue}
            />
            <TodoList>
                {loading && <p>Esta cargando el contenido</p>}
                {error && <p>Lolamento hubo un error, recarga</p>}
                {(!loading && !allTodos) && <p>No tienes ningun ToDo añade uno!!!</p>}
                <TodoButtom/>
                {filtered.map((toDo)=> 
                <TodoItem 
                key={toDo.text} 
                text = {toDo.text} 
                completed={toDo.completed} 
                onDelete={()=>onDelete(toDo.text)} 
                onDone={()=>onDone(toDo.text)}
                />
                )}
            </TodoList>
        </main>
    )
}

export {AppUI}