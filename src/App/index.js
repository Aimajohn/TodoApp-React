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

function App(props) {
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
    setModal
  }= useTodos()


  return (
    <main className='App'>
            <TodoHeader>
                <TodoCounter completedTodos={completedTodos} filtered={filtered}>
                    <img src={imagenlogo} className='headerImg' alt="" />
                </TodoCounter>
                <TodoSearch
                    searchValue = {searchValue}
                    setSearchValue = {setSearchValue}
                />
            </TodoHeader>
                <TodoList>
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
                </TodoList>
                {(!!modal && 
                    <Modal>
                        <TodoForm
                        onAdd={onAdd}
                        setModal={setModal}
                        />
                    </Modal>
                )}
                
        </main>
  );
}
export default App;
