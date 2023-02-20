import React from "react";
import "./TodoList.css"
const TodoList: React.FC<ListProps> = (props)=>{
    console.log(props)
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
interface ListProps{
    onError: boolean;
    onLoading: boolean;
    searchValue: string;
    totalTodos: Todo[];
    filtered: Todo[];
    TodoEmpty: any;
    TodoEmptySearchResults: any;
    Todoerror: any;
    TodoLoading: any;
    TodoRender?: any;

}
type Todo = {
    completed: boolean;
    text: string;
}
export {TodoList}