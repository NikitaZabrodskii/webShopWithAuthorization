import React from 'react';
import { ListGroup, Row } from 'react-bootstrap';
import '../styles/sort.css';

export default function Sort() {
	
	return (
		<div className='container sort'>
			<ListGroup defaultActiveKey='#link1'>
				<ListGroup.Item action href='#link1'>
					Sort by price <button>high</button> <button>low</button>
				</ListGroup.Item>
			
	
			</ListGroup>
		</div>
	);
}
