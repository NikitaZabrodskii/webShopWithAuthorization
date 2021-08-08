import React from 'react'
import {ListGroup} from 'react-bootstrap'
import '../styles/Basket.css'

export default function Basket() {
    return (
        <div className = 'basket'>
        <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      </div>
    )
}
