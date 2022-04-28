import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const toDos = [
    {text: 'Cortar papas', completed:false},
    {text: 'Ver videos en youtube ', completed:true},
    {text: 'Estudiar en platzi', completed:false},
  ]
const TodoContext = React.createContext()

function TodoProvider(props){
    const {
        Item:totalTodos,
        onSavedTotal:setTotalTodos, 
        loading,
        error
      } = useLocalStorage('TODOS_V1',[])
    
      const [searchValue, setSearchValue] = React.useState('')
      const completedTodos = totalTodos.filter((todo)=>!!todo.completed).length
    
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
    return(
        <TodoContext.Provider value={{
            error,
            loading,
            completedTodos,
            setSearchValue,
            searchValue,
            onDelete,
            onDone,
            filtered,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoProvider, TodoContext}