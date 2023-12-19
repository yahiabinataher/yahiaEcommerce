
import React from 'react'

const productRuducer = (state,action) => {

switch (action.type) {
    case "SET_LOADING":
        return {
            ...state,
            isLoading:true
        };
    case "SET_API_DATA":
        const featureData = action.payload.filter((data) => {
            return data.featured === true;
        })
        return{
            ...state,
            isLoading:false,
            product:action.payload,
            featureProducts:featureData
        };
           
    case "API_ERROR":
        return {
            ...state,
            isLoading:false,
            isError:true
        };
    case "SINGEL_LOADING":
        return {
            ...state,
            isSingleLoading:true,
        };
    case "SET_SINGEL_PRODUCT":
        return {
            ...state,
            isSingleLoading:false,
            singelProduct:action.payload
        };
    case "SINGEL_ERROR":
        return {
            ...state,
            isSingleLoading:false,
            isSingleError:true,
        };
   
        
    default:
        return state
}
  return state
}

export default productRuducer