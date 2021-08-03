import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { userActions } from '../store/userStore';

function Button() {
	const dispatch = useDispatch();



    const handlerAuth = (event) =>{
        dispatch(userActions.setUser(event.target.value))
    }
    



	return (
		<form action='#'>
			<p>
				<label>
					<button name='group1' type='radio'  value = {true}  onClick = {handlerAuth} />
					<span>on Auth</span>
				</label>
			</p>
			<p>
				<label>
					<button name='group1' type='radio' value ={false}  onClick = {handlerAuth}/>
					<span>off Auth</span>
				</label>
			</p>
		</form>
	);
}

export default Button;
