import { themeAcionsType } from "./actions"

const initialState = {
    theme: 'black'
}

export const themeReducer = (state = initialState, action) =>{
    switch(action.type){
        case themeAcionsType:
            return {...state, theme: action.payload}
        default:
            return state
    }
}

