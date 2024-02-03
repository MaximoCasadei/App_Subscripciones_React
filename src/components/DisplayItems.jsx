import SingleItem from "./SingleItem"

export const DisplayItems = ( {subs, eliminarItem, editItem} ) => {
  return (
    <>
        <h2>Subscripciones</h2>
        {
            subs.map(item => (
                <SingleItem
                key={item.id}
                id={item.id}   
                price={item.price} 
                type={item.type} 
                eliminarItem={eliminarItem}
                editItem={editItem}
                /> 
            ))
        }
    </>
  )
}
