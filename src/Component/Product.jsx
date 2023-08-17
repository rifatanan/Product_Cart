import { useNavigate } from 'react-router-dom';
import { createCard } from '../APIRequest/APIRequest';

const Product = ( props) => {

    const navigate = useNavigate();
    //console.log(props);

    const handleAddToCart = () => {
        createCard(props.refProduct.id)
        .then(data =>{
            if(data?.msg==="success"){
                console.log('product was added to cart')
            }
            else if(data?.msg === 'fail'){
                navigate("/login")
            }
        })
        .catch(err => console.log("There was an error"))
    }

    return (
        <div className="card w-100 bg-white shadow-xl">
            <figure>
                <img src={ props.refProduct.image } alt={ props.refProduct.title } />
            </figure>
            <div className="card-body">
                <h6 className="text-black">{ props.refProduct.title }</h6>
                <p className="text-sm text-gray-400">{ props.refProduct.shot_des }</p>
                <h6 className="font-bold">Price: ${ props.refProduct.price }</h6>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCart} className="btn btn-sm btn-outline btn-primary">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;