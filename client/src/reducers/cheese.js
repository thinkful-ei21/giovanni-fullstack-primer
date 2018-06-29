
import {
    CHEESE_REQUEST,
    CHEESE_SUCCESS,
    CHEESE_ERROR
} from '../actions/cheese'

const initialState = {
    cheeses: [],
    loading: false,
    error: null
}

export default function reducer(state = initialState, action) {
    if (action.type === CHEESE_REQUEST) {

        return {...state, loading:true}
    }
    else if (action.type === CHEESE_SUCCESS) {
        // console.log(action.cheeses)
        return {...state, cheeses: action.cheeses, error: null, loading:false }
    }
    else if (action.type === CHEESE_ERROR) {

        return {...state, error:action.error, loading:false}
    }
    
    
    return state;
  }