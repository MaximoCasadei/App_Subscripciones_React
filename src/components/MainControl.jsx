import { useState } from "react"
import { Balance } from "./Balance"
import { FormAddSubs } from "./FormAddSubs"
import { DisplayItems } from "./DisplayItems"

export const MainControl = ( { count } ) => {
    const [type, setType] = useState("")
    const [price, setPrice] = useState("")
    const [subs, setSubs] = useState([])
    const [editID, setEditID] = useState("")
    const [spent, setSpent] = useState(0)

    const eliminarItem = (id) => {
        const newList = subs.filter(item => item.id != id)
        setSubs(newList)
    }
    
    const editItem = (id) => {
        setEditID(id);
        subs.map(item => {
            if(item.id === id){
                setType(item.type)
                setPrice(item.price)
            }
        })
    }

  return ( 
    <>
        <div className="main-form">
            <Balance count={count} subs={subs} spent={spent} setSpent={setSpent}/>
            
            <FormAddSubs 
            setType={ setType } 
            setPrice={ setPrice } 
            type={ type } 
            price={ price } 
            setSubs={ setSubs } 
            subs={ subs }
            editID={ editID } 
            setEditID={setEditID}
            spent={spent}
            setSpent={setSpent}
            count={count}
            />
        </div>
        <DisplayItems subs={ subs } eliminarItem={eliminarItem} editItem={editItem}/>
    </>
  )
}
