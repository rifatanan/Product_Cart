import React from 'react';

const CartItem = ({refProduct,remove}) => {
    return (
        <div className="card card-side bg-white shadow-xl">
            <figure>
                <img className="w-40" src={refProduct['image']} alt={refProduct['title']} />
            </figure>
            <div className="card-body">
                <h6 className="text-black">{refProduct['title']}</h6>
                <h3 className="text-xl font-bold text-gray-700">Price: ${refProduct['price']}</h3>
                <div className="card-actions justify-end">
                   <button className="btn btn-sm btn-primary btn-outline" onClick={ ()=> remove(refProduct['id']) }>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;