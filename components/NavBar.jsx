import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ProductosContext } from '../routes/ProductosContext'
import { useWindowWidth } from '../hooks/useWindowWidth'

export const NavBar = () => {

    const { categories, selectedCategory, setSelectedCategory } = useContext(ProductosContext)
    const windowWidth = useWindowWidth()


    const [select, setSelect] = useState(false)

    const handleClick = (e) => {
        setSelectedCategory(e.target.getAttribute("value"))
    }
    

    const handleSelect = () => {
        setSelect(!select)
    }

    return (
        <nav className='nav'>
            <ul className='nav__ul'>
                {
                    windowWidth < 600 && 
                    <>
                        <i className={`fa-solid ${select ? 'fa-xmark' : 'fa-bars'} nav__ul--li`} onClick={handleSelect}>
                        {
                            <ul className={`hamburger-menu ${select ? 'show' : 'hide'}`} value={select}>
                                <li className={`${selectedCategory === '' ? 'hamburger-menu-selected' : ''}`} value='' onClick={handleClick}>ALL PRODUCTS</li>
                                {
                                    categories.map(category => {
                                        return(
                                            <li className={`${selectedCategory === category ? 'hamburger-menu-selected': ''}`}  onClick={handleClick} value={category} key={category}>{category}</li>
                                        )
                                    })
                                }
                            </ul>
                        }
                        </i>
                    </>
                }
                <li className='nav__ul--li'>
                    <NavLink className='nav__ul--link' to='/'>
                        <i className="fa-solid fa-shop"></i>
                    </NavLink>
                </li>
                {
                    windowWidth >= 600 &&
                    <li className='nav__ul--li'>
                        <NavLink className='nav__ul--link'to='/'>Products</NavLink>
                    </li>
                }
                <li className='nav__ul--li'>
                    <NavLink className='nav__ul--link'to='/compras'>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}