import { createContext, useReducer } from "react";
import {mockData} from './mockData'

export const ProductContext = createContext();

const productsReducer = (state, action)=> {
    // console.log(action, state)
    switch (action.type) {
        case 'all':
            const clonedState = {...state, productData: {...state.productData, selectedProducts: []}}
            clonedState.productData.selectedProducts = [...state.productData.products]
            return clonedState
        case 'tv':
            const tvData = {...state, productData: {...state.productData, selectedProducts: []}}
            const newData =tvData.productData.products.filter((p)=> p.type === 'telivision')
            
            tvData.productData.selectedProducts = newData

            return tvData
        default:
            // console.log('default..')
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