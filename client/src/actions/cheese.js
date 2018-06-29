
import { API_BASE_URL } from '../config';


export const CHEESE_REQUEST = 'CHEESE_REQUEST'
export const fetchCheesesRequest = () =>({
    type: CHEESE_REQUEST
})

export const CHEESE_SUCCESS = 'CHEESE_SUCCESS'
export const fetchCheesesSuccess = (cheeses) =>({
    type: CHEESE_SUCCESS,
    cheeses
})

export const CHEESE_ERROR = 'CHEESE_ERROR'
export const fetchCheesesError = (error) =>({
    type: CHEESE_ERROR,
    error
})

export const fetchCheese = () => dispatch =>{
    dispatch(fetchCheesesRequest())
    fetch(`${API_BASE_URL}/cheeses`)
    .then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
    .then(res => dispatch(fetchCheesesSuccess(res)))
    .catch(err => dispatch(fetchCheesesError(err)))
}

export const testing = () =>{console.log('testing...')}