import { useContext } from "react"
import { CarritoContext } from '../routes/CarritoContext'

export const CarritoScreen = () => {

    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra, eliminarLista } = useContext(CarritoContext) 

    const handleClick = () => {
        eliminarLista()
    }

    return (
        <>
            <ul className='carrito-ul'>
                {
                    listaCompras.length > 0 
                    ? listaCompras.map(compra => {
                        return (
                            <li className='carrito-li' key={compra.id}>
                                <h2 className='item-name'>{compra.title}</h2>
                                <p className='item-price'><strong>Unit Price:</strong> ${compra.price}</p>
                                <div className='modificar-cant'>
                                    <button className='btn-cant aumentar' onClick={() => aumentarCantidad(compra.id)}>+</button>
                                    <p className='cant'>{compra.cantidad}</p>
                                    <button className='btn-cant disminuir' onClick={() => disminuirCantidad(compra.id)}>-</button>
                                </div>
                                <img className='item-img' alt={compra.title} src={compra.image} />
                                <button className='btn-delete' onClick={() => eliminarCompra(compra.id)}>Remove</button>
                            </li>
                        )
                    })
                    : <div className='msg-non-items'>No hay productos en el carrito</div>
                }
            </ul>
            {
                listaCompras.length > 0
                &&  <div className='comprar-zone'>
                        <p className='total-compra'>Total: ${listaCompras.reduce((total,producto) => total + producto.price*producto.cantidad, 0).toFixed(2)}</p>
                        <button className='comprar-btn' onClick={handleClick}>Buy</button>
                    </div>
            }
        </>
    )
}