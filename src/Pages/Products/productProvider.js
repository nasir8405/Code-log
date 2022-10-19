import { createContext, useReducer } from "react";
import {mockData} from './mockData'

export const ProductContext = createContext();

const productsReducer = (state, action)=> {
    // console.log(action, state)
    switch (action.type) {
        case 'all':
            const clonedState = {...state}
            clonedState.selectedProducts = [...state.products]
            return clonedState
        case 'tv':
            const tvData = {...state}
            const newData =tvData.products.filter((p)=> p.type === 'telivision')
            tvData.selectedProducts = newData
            return tvData
        default:
            return {...mockData}
    }
}
export const ProductProvider = (props)=> {
    const [state, dispatch] = useReducer(productsReducer, mockData)
    return (
        <ProductContext.Provider value={{state, dispatch}}>
            {props.children}
        </ProductContext.Provider>
    )
}