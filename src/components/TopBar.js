import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../store/userStore';
import '../styles/topbar.css';

import {
	ADMIN_ROUTE,
	BASKET_ROUTE,
	LOGIN_ROUTE,
	SHOP_ROUTE,
} from '../utils/consts';

export default function TopBar() {
	const { isAuth } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const handlerAuth = (event) => {
		dispatch(userActions.setUser(!isAuth));
	};

	return (
		<Navbar bg='dark' variant='dark'>
			<Container className='navbar'>
				
				<NavLink
					to={SHOP_ROUTE}
					style={{ color: 'white', textDecoration: 'none' }}
				>
					BuyItems
				</NavLink>
				<form action='#'>
					<p>
						<label>
							<input
								name='group1'
								type='checkbox'
								checked={isAuth}
								onChange={handlerAuth}
							/>
							<span>set Auth</span>
						</label>
					</p>
				</form>

				{isAuth ? (
					<Nav className='ml-auto menu'>
						<Button  className='menu'>
							Admin
						</Button>
						<Button  className='menu'>
							<NavLink to={BASKET_ROUTE}>Basket</NavLink>
						</Button>
						<Button  className='menu'>
							Log out
						</Button>
					</Nav>
				) : (
					<Nav className='ml-auto menu'>
						<Button >
							
							Login
						</Button>
					</Nav>
				)}
			
			</Container>
		</Navbar>
	);
}
