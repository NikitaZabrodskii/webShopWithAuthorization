import { Form, Button, Row } from 'react-bootstrap';
import '../styles/auth.css';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { useLocation } from 'react-router';

export default function Auth() {
	const location = useLocation();
	const isLogin = location.pathname === LOGIN_ROUTE;

	return (
		<div className='auth'>
			<div className='container'>
				<div className='form'>
					<h2 className='title'>{isLogin ? 'Login' : 'Registration'}</h2>
					<Form>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control type='email' placeholder='Enter email' />
							<Form.Text className='text-muted'>
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password' placeholder='Password' />
						</Form.Group>

						<Button variant='primary' type='submit'>
							{isLogin ? 'Login' : 'Registration'}
						</Button>
						<Row>
							<div>
                                {isLogin ? <div>
                                    Dont have  account ?
								<NavLink to={REGISTRATION_ROUTE}> Registration</NavLink> 
                                </div> : <div>
                                Do you have  account ?
								<NavLink to={LOGIN_ROUTE}> Login</NavLink>
                                </div>
                                }
								
							</div>
						</Row>
					</Form>
				</div>
			</div>
		</div>
	);
}
