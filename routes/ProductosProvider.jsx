import { useEffect, useState } from 'react'
import { ProductosContext } from './ProductosContext.jsx'


export const ProductosProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [error, setError] = useState(null)


    const fetchData = async() => {
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            localStorage.setItem("productos",JSON.stringify(data))
            setProducts(data)
            const uniqueCategories = [...new Set(data.map(product => product.category))];
            setCategories(uniqueCategories)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        const savedData = localStorage.getItem("productos")
        if (savedData) {
            setProducts(JSON.parse(savedData))
            const unicasCategories = [...new Set(JSON.parse(savedData).map(product => product.category))];
            setCategories(unicasCategories)
        } else {
            fetchData()
        }
    }, [])

    return (
        <ProductosContext.Provider value={{error, products, categories, selectedCategory, setSelectedCategory}}> 
            {children}
        </ProductosContext.Provider>
    )
}