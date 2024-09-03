import { NavBar } from "./NavBar"
import { ProductosProvider } from '../routes/ProductosProvider.jsx'
import { Routes, Route, Navigate } from "react-router-dom"
import { CarritoScreen } from "../pages/CarritoScreen.jsx"
import { ProductosScreen } from "../pages/ProductosScreen.jsx"
import { CarritoProvider } from "../routes/CarritoProvider.jsx"
import '../styles/styles.css'


export const ComprasApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar></NavBar>
                    <Routes>
                        <Route path='/' element={<ProductosScreen></ProductosScreen>}></Route>
                        <Route path='/compras' element={<CarritoScreen></CarritoScreen>}></Route>
                        <Route path='/*' element={<Navigate to='/' />}></Route>
                    </Routes>
            </CarritoProvider>
        </ProductosProvider>
    )
}