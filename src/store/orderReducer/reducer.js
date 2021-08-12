import { orderActionsType } from './actions';

const initialState = [];

export const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case orderActionsType.ADD_TO_CART:
			const itemIndex = state.findIndex(
				(orderItem) => orderItem.id === action.payload.id
			);
			if (itemIndex < 0) {
				const newItem = {
					...action.payload,
					quantity: 1,
				};
				return [...state, newItem];
			} else {
				const newOrder = state.map((orderItem, index) => {
					if (index === itemIndex) {
						return {
							...orderItem,
							quantity: orderItem.quantity + 1,
						};
					} else {
						return orderItem;
					}
				});

				return [...newOrder];
			}
		default:
			return state;
	}
};
