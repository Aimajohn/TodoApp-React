import './App.css';
import React from 'react';
import {AppUI} from './AppUI'

const toDos = [
  {text: 'Cortar papas', completed:false},
  {text: 'Ver videos en youtube ', completed:true},
  {text: 'Estudiar en platzi', completed:false},
]
function useLocalStorage(itemName, itemDef){
  const [Item, setItem] = React.useState(itemDef)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(()=>{
    setTimeout(() => {
      try{
        let parsedItem;
        const onSaved = localStorage.getItem(itemName)
        if(!onSaved){
          localStorage.setItem(itemName, JSON.stringify(itemDef))
          parsedItem = itemDef
        }else{
          parsedItem = JSON.parse(onSaved)
        }
        setItem(parsedItem)
        setLoading(false)
      }catch(error){
        setError(error)
      }
    }, 1000);

  })

  function onSavedTotal(newTotal){
    try{
      const stringifyNewTotal = JSON.stringify(newTotal)
      localStorage.setItem(itemName, stringifyNewTotal)
      setItem(newTotal)
    }catch(error){
      setError(error)
    }
  }

  return {Item,onSavedTotal,loading}
}


function App(props) {
  const {
    Item:totalTodos,
    onSavedTotal:setTotalTodos, 
    loading
  } = useLocalStorage('TODOS_V1',[])

  const [searchValue, setSearchValue] = React.useState('')
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
    let newTotal = [...totalTodos]
    newTotal.splice(i,1)
    setTotalTodos(newTotal)

    
  }
  return (
    <AppUI
    loading={loading}
    completedTodos={completedTodos}
    allTodos={allTodos}
    setSearchValue={setSearchValue}
    searchValue={searchValue}
    onDelete={onDelete} 
    onDone={onDone}
    filtered={filtered}
    />
  );
}
export default App;
