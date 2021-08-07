import {ListGroup} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import Goods from './shopComp/Goods';
export default function Shop() {
    const [goods, setGoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



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
			<Goods goods = {goods}/>
		</div>
	);
}
