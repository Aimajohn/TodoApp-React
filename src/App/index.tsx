import './App.css';
import React from 'react';
import {useTodos} from './useTodos'
import {TodoCounter} from '../TodoCounter'
import {TodoButtom} from '../TodoButtom'
import {TodoItem} from '../TodoItem'
import {TodoList} from '../TodoList'
import {TodoSearch} from '../TodoSearch'
import {TodoForm} from '../TodoForm'
import { TodoHeader } from "../TodoHeader";
import {Modal} from '../Modal'
import imagenlogo from '../logopro.png'
import { TodoChange } from '../ChangeAlert';

export function App(props) {
  const  {
    onAdd,
    error,
    loading,
    completedTodos,
    setSearchValue,
    searchValue,
    onDelete,
    onDone,
    filtered,
    modal,
    setModal,
    totalTodos,
    setSyncTodo,
  }= useTodos()

  return (
    <main className='App'>
            <TodoHeader loading={loading}>
                <TodoCounter 
                    completedTodos={completedTodos} 
                    filtered={filtered}
                >
                    <img src={imagenlogo} className='headerImg' alt="" />
                </TodoCounter>
                <TodoSearch
                    searchValue = {searchValue}
                    setSearchValue = {setSearchValue}
                />
            </TodoHeader>
            <TodoList
                searchValue={searchValue}
                totalTodos={totalTodos}
                onError={error}
                onLoading={loading}
                filtered={filtered}
                TodoError={()=><p>Lolamento hubo un error, recarga</p>}
                TodoLoading={()=><p>Esta cargando el contenido</p>}
                TodoEmpty={()=><p>No tienes ningun ToDo añade uno!!!</p>}
                TodoEmptySearchResults={(searchText)=><p>Ningun resultado coincide con "{searchText}"</p>}
                // TodoRender={(toDo)=>
                //     <TodoItem 
                //     key={toDo.text} 
                //     text = {toDo.text} 
                //     completed={toDo.completed} 
                //     onDelete={()=>onDelete(toDo.text)} 
                //     onDone={()=>onDone(toDo.text)}
                //     />
                // }  
            >
                {(toDo)=>
                    <TodoItem 
                    key={toDo.text} 
                    text = {toDo.text} 
                    completed={toDo.completed} 
                    onDelete={()=>onDelete(toDo.text)} 
                    onDone={()=>onDone(toDo.text)}
                    />
                }  
            </TodoList>
            <TodoButtom
                setModal ={setModal} 
                modal ={modal}
            />

                {/* <TodoList>
                    {loading && <p>Esta cargando el contenido</p>}
                    {error && <p>Lolamento hubo un error, recarga</p>}
                    {(!loading && !filtered.length) && <p>No tienes ningun ToDo añade uno!!!</p>}
                    {filtered.map((toDo)=> 
                    <TodoItem 
                    key={toDo.text} 
                    text = {toDo.text} 
                    completed={toDo.completed} 
                    onDelete={()=>onDelete(toDo.text)} 
                    onDone={()=>onDone(toDo.text)}
                    />
                    )}
                    <TodoButtom
                    setModal ={setModal} 
                    modal ={modal}
                    />
                </TodoList> */}
                {(!!modal && 
                    <Modal>
                        <TodoForm
                        onAdd={onAdd}
                        setModal={setModal}
                        />
                    </Modal>
                )}
        <TodoChange
            setSyncTodo={setSyncTodo}
        />
        </main>
  );
}
export default App
