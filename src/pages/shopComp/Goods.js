import React from 'react';
import Good from './Good';
import '../../styles/goods.css';

export default function Goods({ goods }) {
	const {} = goods;
	return (
		<div className = 'container'>
			<div className='goods'>
				{goods.map((item) => (
					<Good key={item.id} {...item} />
				))}
			</div>
		</div>
	);
}
