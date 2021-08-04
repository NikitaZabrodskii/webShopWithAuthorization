import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../store/userStore';

function Button() {
	const dispatch = useDispatch();
	const { isAuth } = useSelector((state) => state.user);

	const handlerAuth = (event) => {
		
		
		dispatch(userActions.setUser(!isAuth))
	};

	return (
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
	);
}

export default Button;
