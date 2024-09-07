import { useState } from "react"

export const Card = ({ enCarrito, image, title, description, price, handleAgregar, handleQuitar }) => {

    const [added, setAdded] = useState(false)

    const clickAgregar = (compra) => {
        handleAgregar(compra)
        setAdded(true)
    }

    const clickQuitar = (id) => {
        handleQuitar(id)
        setAdded(false)
    }

    return (
        <div className='product'>
            <img className='product-image' alt={title} src={image} />
                <h3 className='product-title'>{title}</h3>
                <p className='product-desc'>{description}</p>
                <p className='product-price'>${price}</p>

                
                {    added || enCarrito
                    ?   <button
                            className='product-btn-delete'
                            type="button"
                            onClick={clickQuitar}
                        >
                            Quitar del carrito
                        </button>
                    :   <button
                            className='product-btn'
                            type="button"
                            onClick={clickAgregar}
                        >
                            Agregar al carrito
                        </button>
                }
        </div>
    )
}