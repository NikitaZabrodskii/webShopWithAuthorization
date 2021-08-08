import {ListGroup} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import Goods from './shopComp/Goods';
export default function Shop() {
    const [goods, setGoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder] = useState([])



    const addToBasket = (item) =>{
        const itemId = order.findIndex((orderItem) => orderItem.id === item.id)

        if(itemId <0){
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else{
            const oldItem  = order.map((orderItem ,orderIndex) =>{
                if(itemId === orderIndex){
                    return {
                        ...orderItem,
                        quantity:order.quntity +1
                    }
                }else{
                    return orderItem
                }
            })
            setOrder([...order,oldItem])
        }

    }

    useEffect(() => {
        fetch('https://fortniteapi.io/v1/shop?lang=en&=', {
            headers: {
                Authorization: '59daafa2-2276f836-62cd21c1-b7de8e42',
            },
        })
            .then((response) => response.json())
            .then((data) => setGoods(data.featured));
        setIsLoading(false);
    }, []);
    

	return (
     
		<div>
			<Goods goods = {goods} addToBasket ={addToBasket}/>
		</div>
	);
}
