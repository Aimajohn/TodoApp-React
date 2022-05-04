import React from "react"

function useLocalStorage(itemName, itemDef){
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
          setError(error)
        }
      }, 2000);
  
    }, [syncItem])
  
    function onSavedTotal(newTotal){
      try{
        const stringifyNewTotal = JSON.stringify(newTotal)
        localStorage.setItem(itemName, stringifyNewTotal)
        setItem(newTotal)
      }catch(error){
        setError(error)
      }
    }

    function needSyncItem(){
      setSyncItem(true)
      setLoading(true)
    }
    return {Item,onSavedTotal,loading,error, needSyncItem}
  }

  export {useLocalStorage}