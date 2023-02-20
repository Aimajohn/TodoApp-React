import React from "react"

type Todo = {
  completed: boolean;
  text: string;
}

function useLocalStorage(itemName:string, itemDef:Todo[]| []){
    const [Item, setItem] = React.useState(itemDef)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [syncItem, setSyncItem] = React.useState(true)
    React.useEffect(()=>{
      setTimeout(() => {
        try{
          let parsedItem;
          const onSaved = localStorage.getItem(itemName)
          if(!onSaved){
            localStorage.setItem(itemName, JSON.stringify(itemDef))
            parsedItem = itemDef
          }else{
            parsedItem = JSON.parse(onSaved)
          }
          setItem(parsedItem)
          setLoading(false)
          setSyncItem(false)
        }catch(error){
          setError(true)
        }
      }, 500);
  
    }, [syncItem])
  
    function onSavedTotal(newTotal:Todo[]){
      try{
        const stringifyNewTotal = JSON.stringify(newTotal)
        localStorage.setItem(itemName, stringifyNewTotal)
        setItem(newTotal)
      }catch(error){
        setError(true)
      }
    }

    function needSyncItem(){
      setSyncItem(true)
      setLoading(true)
    }
    return {Item,onSavedTotal,loading,error, needSyncItem}
  }

  export {useLocalStorage}