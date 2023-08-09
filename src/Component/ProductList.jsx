import { useEffect, useState } from "react";
import Product from "./Product";
import { productListAPI } from "../APIRequest/APIRequest";
import Loader from '../Loader/Loader';

const ProductList = () => {

    const [products,setProducts] = useState(null);
    const [error,setError] = useState('');

    useEffect( ()=> {
        productListAPI()
        .then( (product) => setProducts(product))
        .catch(err => setError('There was an error'))
        
    },[]);

    console.log(products);

    let output;
    
    if(error){
        output = <div>Threre was an error</div>;
    }
    else if(products === null){
        output =<Loader />
    }
    else if(products?.length>0){
        
        output = products.map( product => <Product key={product.id} refProduct={product}/>)
    }
    else{
        output = <div><h1>No Products found 1!</h1></div>
    }

    //console.log(output);

    return (
        <div className="container z-10 mx-auto my-12 p-9">
            <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {output}
            </div>
        </div>
    );
};
export default ProductList;