import  {userReducer} from './userStore/reducer'
import { orderReducer } from './orderReducer/reducer'
import {combineReducers} from 'redux'


export const reducers = combineReducers({
    
    user: userReducer,
    order: orderReducer
})