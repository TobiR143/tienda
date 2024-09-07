import { useContext } from "react"
import { ProductosContext } from "../routes/ProductosContext"
import { CarritoContext } from "../routes/CarritoContext"
import { Card } from "../components/Card"
import { OptionSelector } from "../components/OptionSelector"
import { useWindowWidth } from "../hooks/useWindowWidth"

export const ProductosScreen = () => {

    const { error, products, selectedCategory } = useContext(ProductosContext)
    const { listaCompras, agregarCompra, eliminarCompra} = useContext(CarritoContext)
    const windowWidth = useWindowWidth() 


    const handleAgregar = (producto) => {
        agregarCompra(producto)
    }

    const handleQuitar = (id) => {
        eliminarCompra(id)
    }

    const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products

    const isInCart = (id) => {
        return listaCompras.some(item => item.id === id);
    };


    return (
        <>
        <main className="main">
            {error && <p className = 'error' style = {{color: 'red'}}>{error}</p>} 
            {windowWidth >= 600 && <OptionSelector />}
            <div className="products">
            {
                filteredProducts.map(producto => {
                    return (
                        <Card
                        key={producto.id}
                        image={producto.image}
                        title={producto.title}
                        description={producto.description}
                        price={producto.price}
                        handleAgregar={() => handleAgregar(producto)}
                        handleQuitar={() => handleQuitar(producto.id)}
                        enCarrito={isInCart(producto.id)}
                        />
                    )
                })
            }
            </div>
        </main>
    </>
    )
}