import React, { type ReactNode } from "react";
import "./TodoList.css";
const TodoList = ({
  TodoEmpty,
  TodoEmptySearchResults,
  TodoLoading,
  Todoerror,
  children,
  filtered,
  onError,
  onLoading,
  searchValue,
  totalTodos,
  TodoRender,
}: ListProps) => {
  return (
    <section>
      {onError && Todoerror()}
      {onLoading && TodoLoading()}
      {!onLoading && !totalTodos.length && TodoEmpty()}
      {!!totalTodos.length &&
        !onLoading &&
        !filtered.length &&
        TodoEmptySearchResults(searchValue)}
      <ul className={`TodoList`}>
        {!onLoading && !onError && filtered.map(TodoRender || children)}
      </ul>
    </section>
  );
};
interface ListProps {
  onError: boolean;
  onLoading: boolean;
  searchValue: string;
  totalTodos: Todo[];
  filtered: Todo[];
  TodoEmpty(): ReactNode;
  TodoEmptySearchResults(value: string): ReactNode;
  Todoerror(): ReactNode;
  TodoLoading(): ReactNode;
  TodoRender?: any;
  children: ReactNode;
}
type Todo = {
  completed: boolean;
  text: string;
};
export { TodoList };
