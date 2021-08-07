import { userActionsType } from './actions';

const initialState = {
	isAuth: false,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
        case userActionsType.SET_USER:
            return {...state, isAuth: action.payload}
		default:
			return state;
	}
};
