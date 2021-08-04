import React from 'react'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'

export default function Auth() {
    return (
        <div>
            auth
            <br/>
            <NavLink to={SHOP_ROUTE}> Shop</NavLink>
           <NavLink to={LOGIN_ROUTE}> Login</NavLink>
           <NavLink to={REGISTRATION_ROUTE}> Registration</NavLink>
        </div>
    )
}
