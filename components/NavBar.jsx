import { NavLink } from 'react-router-dom'

export const NavBar = () => {

    
    return (
        <nav className='nav'>
            <ul className='nav__ul'>
                <li className='nav__ul--li'>
                    <NavLink className='nav__ul--link' to='/'>
                        <i className="fa-solid fa-shop"></i>
                    </NavLink>
                </li>
                <li className='nav__ul--li'>
                    <NavLink className='nav__ul--link'to='/'>Products</NavLink>
                </li>
                <li className='nav__ul--li'>
                    <NavLink className='nav__ul--link'to='/compras'>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}