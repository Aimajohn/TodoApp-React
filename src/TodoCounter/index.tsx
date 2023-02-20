import {ReactNode} from "react";
import './TodoCounter.css'
import {FaGrinWink} from 'react-icons/fa'
function TodoCounter({children, completedTodos, filtered, loading}:CounterProps){
    return(
      <div className={`TodoCounter ${!!loading && `TodoConter--loading`}`}>
      <h2>
        <p>GETTING</p>
        <p><span>SH</span>IT</p>
        <p>DONE <FaGrinWink/></p>
        <p>{completedTodos} de {filtered.length}</p>
        </h2>
        {children}
      </div>

    )
}

type CounterProps = {
  children: ReactNode;
  completedTodos: number;
  filtered: Todo[];
  loading: boolean;

}
type Todo = {
  completed: boolean;
  text: string;
}

export {TodoCounter}