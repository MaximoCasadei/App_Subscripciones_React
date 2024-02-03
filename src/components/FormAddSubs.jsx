import { useState } from "react"

export const FormAddSubs = ( {setType, setPrice, type, price, setSubs, subs, editID, setEditID, spent, count} ) => {
    const [error, setError] = useState(false)
    const [errorMoney, setErrorMoney] = useState(false)
    
    const handleSubs = (e) => {
        e.preventDefault()
        
        if(price === "" || Number(price) < 0 || type === ""){
            setError(true)
            return;
        }
        if (count - spent < Number(price)){
            setErrorMoney(true);
            return;
        }
        setError(false);
        setErrorMoney(false)

        if (editID != ""){
            setEditID("");
            const newSubs = subs.map(item => {
                if (item.id === editID){
                    item.type = type;
                    item.price = price
                }
                return item
            })
            setSubs(newSubs)
        } else{
            const data = {
                type: type,
                price: price,
                id: Date.now()
            }
            setSubs([...subs, data])
        }

        
        
        setType("")
        setPrice("")
    }


  return (
    <>
        <div className="add-subscription">
            <h3>Agregar Subs</h3>
            <form onSubmit={ handleSubs } >
                <p>Servicio</p>
                <select onChange={ e => setType(e.target.value)} value={type}>
                    <option value=""> - Elegir - </option>
                    <option value="netflix">Netflix</option>
                    <option value="disneyPlus">Disney +</option>
                    <option value="hboMax">HBO max</option>
                    <option value="starPlus">Star +</option>
                    <option value="primeVideo">Prime Video</option>
                    <option value="spotify">Spotify</option>
                    <option value="apletv">Apple Tv</option>
                </select>
                <p>Cantidad</p>
                <input type="number" placeholder="$" onChange = { e => setPrice(e.target.value)} value={price}/>
                { editID != "" ? <input type="submit" value="Guardar" /> : <input type="submit" value="Agregar" />}
                
            </form>
            { error ? <p className="error">Algun Campo Incompleto</p> : null}
            { errorMoney ? <p className="error">No tienes Saldo Disponible</p> : null}
        </div>
    </>
  )
}
