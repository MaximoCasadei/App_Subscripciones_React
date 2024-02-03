import { moneyFormat } from "../helpers"

const SingleItem = ( {price, type, id, eliminarItem, editItem} ) => {

    const handleDelete = ( e ) => {
        e.preventDefault()
        const answer = window.confirm(`Estas seguro que quieres eliminar ${type} de la lista ?`)
        if(answer){
            eliminarItem(id)
        }
    }

    const handleEdit = (e) => {
        e.preventDefault()
        editItem(id);
    }

    const urlImg = `./src/public/${type}.png`
  return (
    <>
        <div className="single-item">
            <img src={urlImg} alt="Logo" />
            <h3> Precio: {moneyFormat(Number(price))} </h3>
            <a href="" onClick={handleDelete}>Borrar</a>
            <a href="" onClick={handleEdit}>Editar</a>
        </div>
    </>
  )
}

export default SingleItem