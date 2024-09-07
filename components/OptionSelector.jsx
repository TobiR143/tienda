import { useContext } from "react"
import { ProductosContext } from "../routes/ProductosContext"

export const OptionSelector = () => {

    const { categories, selectedCategory, setSelectedCategory } = useContext(ProductosContext)


    const handleClick = (e) => {
        setSelectedCategory(e.target.getAttribute("value"))
    }

    return (
        <ul className='options-selector'>
            <li className={`option ${selectedCategory === '' ? 'selected' : ''}`} value='' onClick={handleClick}>All</li>
            {
                categories.map((category) => {
                    return (
                        <li className={`option ${selectedCategory === category ? 'selected': ''}`} key={category} value={category} onClick={handleClick}>{category.charAt(0).toUpperCase() + category.slice(1)}</li>
                    )
                })
            }
        </ul>
    )
}