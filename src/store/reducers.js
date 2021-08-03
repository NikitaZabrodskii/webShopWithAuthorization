import  {userReducer} from './userStore/reducer'
import { themeReducer } from './themeStore'
import {combineReducers} from 'redux'


export const reducers = combineReducers({
    theme:themeReducer,
    user: userReducer
})