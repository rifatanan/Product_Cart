import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { fetchCartList, removeCard } from '../APIRequest/APIRequest';
import { useNavigate } from 'react-router-dom';


const CartList = () => {

    const [items,setItems] = useState([]);
    const navigate = useNavigate();

    useEffect( ()=>{
        fetchCartList()
        .then( data =>{
            if(data.msg == "success"){
                setItems(data.data)
            }
        })
        .catch(err=>console.log('there was an error'))
    },[]);

    const handleRemoveCart = (productID) => {
        removeCard(productID)
        .then(data => {
            if(data.msg === "success"){
                const remainingItem = items.filter( (item) => item.product.id !==productID);
                setItems(remainingItem);
            }
        })
        .catch(err=>console.log('there was an error'))
    }

    const calculateTotal = () => {
        const totalPrice = items.reduce( (total,currentValue) => {
            const priceString = currentValue.product.price;
            const priceStringToNumber = priceString.replace(/,/g, "");
            const p = Number(priceStringToNumber)
            const mainPrice = parseInt(p)
            return mainPrice + total;
        },0)
        return totalPrice;
    }

    const checkOut = () => {
        navigate("/");
    }

    console.log(items);

    let output;
    
    if(items?.length>0){
       output = items.map( product => <CartItem key={product.id} refProduct={product.product} remove={handleRemoveCart}/>)
    }
    else{
        output = <div>No Products found!</div>
    }

    return (
        <div className="container z-10 mx-auto my-12 p-9">
            <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-3 gap-3">
                <div  className="container col-span-2">
                    <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-3">
                        { output }
                    </div>
                </div>

                <div className="card shadow-xl h-44 w-100 bg-white">
                    <div className="card-body">
                        <h2 className="card-title">Total Item: {items.length}</h2>
                        <h6>Total Price: ${ calculateTotal() }</h6>
                        <div className="card-actions">
                            <button onClick={checkOut} className="btn btn-sm my-4 btn-primary btn-outline">Check out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CartList;