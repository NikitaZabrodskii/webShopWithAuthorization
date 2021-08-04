import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

export default function Shop() {
    const {isAuth} = useSelector((state)=> state.user)
    
    return (
        <div>
            Shop
            <br/>
            <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
            <NavLink to={LOGIN_ROUTE}>Login</NavLink>
            {isAuth  && <NavLink to={BASKET_ROUTE}>Basket</NavLink>    }
            {isAuth  &&   <NavLink to = {ADMIN_ROUTE}>Admin</NavLink>   }
           
         

        </div>
    )
}
