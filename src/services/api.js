
import { API_URL } from '../constants/constants';
import axios from 'axios'

export const getRecipes= async(searchedQuery)=>{
    try {
            let response=  await  axios.get(`${API_URL}/search?q=${searchedQuery}`)
            return response.data;
        
    } catch (error) {
        console.log("Error while calling the API",error.message);
        return error.response
        
    }
}


export const getRecipe= async(searchedQuery)=>{
    try {
            let response=  await  axios.get(`${API_URL}/get?rId=${searchedQuery}`)
            return response.data;
        
    } catch (error) {
        console.log("Error while calling the API",error.message);
        return error.response
        
    }
}