import React from "react";
import './TodoSearch.css'
function TodoSearch({searchValue, setSearchValue, loading}){
    function searcher(event){
      const eme = event.target.value
      setSearchValue(eme)
    }
    return (
      <input className="todoInput"
        disabled={!!loading}
      placeholder='No encuentras algo...' type="text" id="TodoSearch" onChange={searcher}/>
    )
}

export {TodoSearch}