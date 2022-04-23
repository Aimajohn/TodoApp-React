import './App.css';
import React, {useState, useEffect} from 'react';
import {AppUI} from './AppUI'

// const toDos = [
//   {text: 'Cortar papas', completed:false},
//   {text: 'Ver videos en youtube ', completed:true},
//   {text: 'Estudiar en platzi', completed:false},
// ]
function useLocalStorage(itemName, itemDef){
  // const [error, setError] = React.useState(false)
  const [Item, setItem] = React.useState(itemDef)
  // const [loading, setLoading] = React.useState(true)
  console.log('antes de useEffect')
  React.useEffect(()=>{
    console.log('React useEffect in full work')
    // setTimeout(() => {
      let parsedItem;
      const onSaved = localStorage.getItem(itemName)

      if(!onSaved){
        localStorage.setItem(itemName, JSON.stringify(itemDef))
        parsedItem = itemDef
      }else{
        parsedItem = JSON.parse(onSaved)
      }
      console.log(parsedItem)
      setItem(parsedItem)
      // setLoading(false)
        // try{
        // }
        // catch(error){
        //   setError(error)
        // }
      // }, 1000);
    },[Item])

    console.log('despues de useEffect')

  
  function onSavedTotal(newTotal){
    const stringifyNewTotal = JSON.stringify(newTotal)
    localStorage.setItem(itemName, stringifyNewTotal)
    setItem(newTotal)
  }
  return [
    Item,
    onSavedTotal]
  
}

function App(props) {
  
  const [totalTodos,setTotalTodos] = useLocalStorage('TODOS_V1','')
  const [searchValue, setSearchValue] = React.useState('')
  console.log(totalTodos)
  const completedTodos = totalTodos.filter((todo)=>!!todo.completed).length
  const allTodos = totalTodos.length

  let filtered = [];
  if(!searchValue.length>=1){
    filtered = totalTodos
  }else{
    filtered = totalTodos.filter(todo=> {
      const searchText = searchValue.toLowerCase()
      const toDoText = todo.text.toLowerCase()
      return toDoText.includes(searchText)
    })
  }
  
  function onDone(text){
    const i = totalTodos.findIndex((todo)=>todo.text === text)
    const newTotal = [...totalTodos]
    newTotal[i].completed = !newTotal[i].completed
    setTotalTodos(newTotal)
}
function onDelete(text){
    const i = totalTodos.findIndex((todo)=>todo.text === text)
    const newTotal = [...totalTodos]
    newTotal.splice(i,1)
    setTotalTodos(newTotal)
}
  return (
    <AppUI
    completedTodos={completedTodos}
    totalTodos={allTodos}
    setSearchValue={setSearchValue}
    searchValue={searchValue}
    onDelete={onDelete} 
    onDone={onDone}
    filtered={filtered}
    />
  );
}
export default App;
