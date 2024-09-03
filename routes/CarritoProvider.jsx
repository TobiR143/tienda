import { useReducer, useEffect } from 'react'
import { CarritoContext } from './CarritoContext.jsx'

const initialState = []


export const CarritoProvider = ({ children }) => {

    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CARRITO] Agregar Compra':
                return [...state, action.payload]
            case '[CARRITO] Aumentar Cantidad':
                return state.map(item => {
                    const cant = item.cantidad + 1
                    if (item.id === action.payload) return {...item, cantidad: cant}
                    return item
                })
            case '[CARRITO] Disminuir Cantidad':
                return state.map(item => {
                    const cant = item.cantidad - 1
                    if (item.id === action.payload && cant >= 1) return {...item, cantidad: cant}
                    return item
                })
            case '[CARRITO] Eliminar Compra':
                return state.filter(item => item.id !== action.payload)
            case '[CARRITO] Eliminar Lista':
                return initialState
            default: 
                return state
        }
    }

    const init = () => {
        const comprasGuardadas = localStorage.getItem('listaCompras');
        return comprasGuardadas ? JSON.parse(comprasGuardadas) : [];
    }

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('listaCompras', JSON.stringify(listaCompras));
    }, [listaCompras])

    const agregarCompra = (compra) => {
        compra.cantidad = 1
        const action = {
            type: '[CARRITO] Agregar Compra',
            payload: compra
        }
        dispatch(action)
    }

    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad',
            payload: id
        }
        dispatch(action)
    }

    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Disminuir Cantidad',
            payload: id
        }
        dispatch(action)
    }

    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] Eliminar Compra',
            payload: id
        }
        dispatch(action)
    }

    const eliminarLista = () => {
        const action = {
            type: '[CARRITO] Eliminar Lista'
        }
        dispatch(action)
    }

    return (
        <CarritoContext.Provider value={{listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra, eliminarLista}}>
            {children}
        </CarritoContext.Provider>
    )
}