import axios from "axios";
import { Children, createContext, useEffect, useReducer } from "react";
import reducer from "./productRuducer"

const AppContext = createContext();
const Api = "https://api.pujakaitem.com/api/products"
const initialState = {
    isLoading : false,
    isError : false,
    product:[],
    featureProducts:[],
    isSingleLoading:false,
    singelProduct:{},
    isSingleError:false

}

const AppProvider = ({children}) =>{
//reducer hook
    const [state,dispatch] = useReducer(reducer,initialState);

    //api call
    const getProduct = async (url) =>{
        dispatch({type:"SET_LOADING"})
        try {
        const res = await  axios.get(url)
        const products = await res.data;
        dispatch({type:"SET_API_DATA", payload:products})
        
        } catch (error) {
            dispatch({type:"API_ERROR"})
        }

    }
    //singel product
    const getSingelProduct = async(url) => {
        dispatch({type:"SINGEL_LOADING"})
        try {
        const res = await  axios.get(url)
        const singelProduct = await res.data;
        dispatch({type:"SET_SINGEL_PRODUCT",payload:singelProduct})
        } catch (error) {
            dispatch({type:"SINGEL_ERROR"})
        }
    }
    useEffect(() => {
        getProduct(Api)
    },[])
    return (
        <AppContext.Provider value={{...state, getSingelProduct}} >{children}</AppContext.Provider>
    )
}
export {AppProvider,AppContext};


