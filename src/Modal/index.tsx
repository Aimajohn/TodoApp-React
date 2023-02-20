import { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
function Modal({ children }: { children: ReactNode }) {
    const modal = document.getElementById("modal")
  return ReactDOM.createPortal(
    <div className="popNote">{children}</div>,
    modal as Element
  );
}

export { Modal };
