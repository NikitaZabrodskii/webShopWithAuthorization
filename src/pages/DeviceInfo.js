import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";


export default function DeviceInfo() {
    return (
        <div>
           deviceInfo
           <br/>
           <NavLink to={SHOP_ROUTE}> Shop</NavLink>
           <NavLink to={LOGIN_ROUTE}> Login</NavLink>
           <NavLink to={REGISTRATION_ROUTE}> Registration</NavLink>
        </div>
    )
}
