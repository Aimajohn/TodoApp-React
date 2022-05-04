import React from "react";
import "./TodoList.css"
function TodoList (props){
    return(
        <section>
        {props.onError && props.Todoerror() }
        {props.onLoading && props.TodoLoading() }
        {(!props.onLoading && !props.totalTodos.length) && props.TodoEmpty()}
        {(!!props.totalTodos.length && !props.onLoading && !props.filtered.length ) && props.TodoEmptySearchResults(props.searchValue)}
        <ul className={`TodoList`}>
            {(!props.onLoading && !props.onError) && props.filtered.map(props.TodoRender || props.children)}
        </ul>
        </section>
    )
}
export {TodoList}