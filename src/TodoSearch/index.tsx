import React from "react";
import './TodoSearch.css'
function TodoSearch({searchValue, setSearchValue, loading}:SearchProps){
    function searcher(event: React.ChangeEvent<HTMLInputElement>){
      const eme = event.target.value
      setSearchValue(eme)
    }
    return (
      <input className="todoInput"
        disabled={!!loading}
      placeholder='No encuentras algo...' type="text" id="TodoSearch" onChange={searcher}/>
    )
}

type SearchProps = {
  searchValue: string;
  setSearchValue(value:string):void;
  loading: boolean;
}

export {TodoSearch}