import React from 'react'
import {useContext} from 'react'
import { Context } from '..'

 function Button() {
     const {user}  =  useContext(Context)
    return (
        <div>
            <h1>
                {user.isAuth}
            </h1>
            <button onClick={()=> user.setIsAuth()}>changeAuth</button>
        </div>
    )
}

export default Button