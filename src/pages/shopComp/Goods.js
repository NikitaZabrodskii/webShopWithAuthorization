import React from 'react';
import Good from './Good';
import '../../styles/goods.css';
import Sort from '../../components/Sort';

export default function Goods({ goods , addToBasket = Function.prototype}) {
	
	return (
		<div className='wrapper'>
				<Sort/>
			<div className='container'>
				<div className='goods'>
					{goods.map((item) => (
						<Good key={item.id} {...item} addToBasket ={addToBasket} />
					))}
				</div>
			</div>
		
		</div>
	);
}
