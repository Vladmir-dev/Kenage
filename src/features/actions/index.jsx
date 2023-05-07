// import { fetchProductStart, fetchProductSuccess, fetchProductFailure, loginStart, loginSuccess, loginFailure, signUpStart, signUpSuccess, signUpFailure } from "../reducers/cart";
import {fetchProductStart, fetchProductFailure, fetchProductSuccess} from "../reducers/shop"
import {loginStart, loginSuccess, loginFailure, signUpStart, signUpSuccess, signUpFailure} from "../reducers/users"

import { useDispatch } from "react-redux";
import axios from 'axios';

const dispatch = useDispatch()

export const fetchProducts = () => async (dispatch) => {
    try{
        dispatch(fetchProductStart())
        const response = await axios.get('')
        const data = await response.json()
        dispatch(fetchProductSuccess(data))
    }catch(error){
        dispatch(fetchProductFailure(error.message))
    }
}



export const signUp = async (userData) => {
    try {
      dispatch(signUpStart())
      const response = await axios.post(`${API_URL}/auth/signup`, userData);
      dispatch(signUpSuccess(response.data))
      return response.data;
    } catch (error) {
      dispatch(signUpFailure(error.response.data.message));
    }
  };
  
  export const login = async (userData) => {
    try {
        dispatch(loginStart())
      const response = await axios.post(`${API_URL}/auth/login`, userData);
      dispatch(loginSuccess(response.data))
      return response.data;
    } catch (error) {
       dispatch(loginFailure(error.response.data.message));
    }
  };
  
  export const logout = async () => {
    try {
      await axios.post(`${API_URL}/auth/logout`);
    } catch (error) {
      throw error.response.data.message;
    }
  };
// export const addItem = (product) => {
//     return {
//         type : "ADDITEM",
//         payload : product
//     }
// }

// export const delItem = (product) => {
//     return {
//         type : "DELITEM",
//         payload : product
//     }
// }