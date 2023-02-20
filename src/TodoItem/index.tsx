import React, { ReactEventHandler } from "react";
import "./TodoItem.css";
import { CgClose } from "react-icons/cg";
function TodoItem({ completed, onDone, text, onDelete }: ItemProps) {
  return (
    <li className="TodoItem">
      <button
        type="button"
        className={
          completed
            ? "material-icons-outlined checked checkedDone"
            : "material-icons-outlined checked"
        }
        onClick={onDone}
      >
        done
      </button>
      <div className={`TodoItemButton ${completed && "itemDone"}`}>
        <p>{text}</p>
        <button
          type="button"
          onClick={onDelete}
          className="material-icons-outlined delete"
        >
          <CgClose />
        </button>
      </div>
    </li>
  );
}

type ItemProps = {
  completed: boolean;
  onDone(event: React.MouseEvent<HTMLButtonElement>): void;
  text: string;
  onDelete(event: React.MouseEvent<HTMLButtonElement>): void;
};

export { TodoItem };
