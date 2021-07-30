import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import Info from "./pages/Info";
import Shop from "./pages/Shop";
import { AUTH_ROUTE, BASKET_ROUTE, INFO_ROUTE, SHOP_ROUTE } from "./utils/consts";


export const publicRoutes = [
    {
        path:AUTH_ROUTE,
        Component: Auth
    },
    {
        path:SHOP_ROUTE,
        Component: Shop
    },
    {
        path:INFO_ROUTE,
        Component: Info
    },
    {
        path:BASKET_ROUTE,
        Component: Basket
    }
]