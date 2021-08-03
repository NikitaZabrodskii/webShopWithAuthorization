import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button'

function AppRouter() {
	const {isAuth} = useSelector((state) => state.user);
    console.log(isAuth);

	return (
        <div>
		<Switch>
			{isAuth &&
				privateRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} component={Component} exact />
				))}
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} component={Component} exact />
			))}
			<Redirect to={SHOP_ROUTE} />

		</Switch>
        <Button/>
        </div>
	);
}

export default AppRouter;
