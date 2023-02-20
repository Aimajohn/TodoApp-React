import './TodoButton.css'

export function TodoButtom ({setModal, modal}:ButtomProps){
    return (
      <button onClick={()=>setModal(prevState=>!prevState)} className="TodoButton" type='button'><span className="material-icons-round">
      add
      </span></button>
        
    )
}
type ButtomProps ={
  modal: boolean;
  setModal:React.Dispatch<React.SetStateAction<boolean>>
}
