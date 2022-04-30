import React from "react";
import './TodoSearch.css'
import {TodoContext} from '../TodoContext'
function TodoSearch(){
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
    function searcher(event){
      const eme = event.target.value
      setSearchValue(eme)
    }
    return (
      <input className="todoInput" placeholder='No encuentras algo...' type="text" id="TodoSearch" onChange={searcher}/>
    )
}

export {TodoSearch}