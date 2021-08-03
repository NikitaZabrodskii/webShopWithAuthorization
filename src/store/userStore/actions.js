export const userActionsType = {
    SET_USER: 'USER.SET_USER'
}




export const userActions = {
    setUser:(payload) =>({type : userActionsType.SET_USER , payload })
}