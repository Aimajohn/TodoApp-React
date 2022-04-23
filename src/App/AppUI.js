import React from "react";
import {TodoCounter} from '../TodoCounter'
import {TodoButtom} from '../TodoButtom'
import {TodoItem} from '../TodoItem'
import {TodoList} from '../TodoList'
import {TodoSearch} from '../TodoSearch'
function AppUI({completedTodos,
    totalTodos,
    setSearchValue,
    searchValue,
    onDelete,
    onDone,
    filtered}){
    return (
        <main className='App'>
            <TodoCounter
                completedTodos={completedTodos}
                totalTodos={totalTodos}
            >
                <img src='/HD-wallpaper-fire-minimalist-blue-minimal-flat.png' className='headerImg' alt="" />
            </TodoCounter>
            <TodoSearch
                setSearchValue={setSearchValue}
                searchValue={searchValue}
            />
            <TodoList>
                {/* {loading && <p>Estamos cargando, espera un momento</p>}
                {error && <p>Desesperate hubo un error</p>}
                {(!loading && !filtered.length) && <p>Crea tu primer toDo!!!</p>} */}
                <TodoButtom/>
                {filtered.map((toDo)=> 
                <TodoItem 
                key={toDo.text} 
                text = {toDo.text} 
                completed={toDo.completed} 
                onDelete={()=>onDelete(toDo.text)} 
                onDone={()=>onDone(toDo.text)}/>
                )}
            </TodoList>
        </main>
    )
}

export {AppUI}