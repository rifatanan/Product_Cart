import React, { useState } from 'react';
import { verifyLogin } from '../APIRequest/APIRequest';
import { useNavigate, useSearchParams } from 'react-router-dom';

const OTPPage = () => {

    const [pin,setPin] = useState();
    const navigate = useNavigate();
    const [searchParam] = useSearchParams();
    const email = searchParam.get('email');

    const handleVerifyLogin = () => {
        console.log("this is handle verify login")
        verifyLogin(email,pin)
        .then((data) => {
            console.log(data.msg);
            if(data?.msg === "success"){
                localStorage.setItem("token",data.data);
                navigate("/");
            }
        })
        .catch(err => console.log('there was an error'))
    }

    return (
        <div className="container  mx-auto">
            <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1 gap-3">
                <div className="flex items-center w-full justify-center h-screen">
                    <div className="card w-8/12 card-side bg-white shadow-xl">
                        <figure><img className="h-96 w-96" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBM1PuGgnVseqYAtWzB1LkrFqgSUo1SgYXTQ&usqp=CAU" alt="Image"/></figure>
                        <div className="card-body justify-center items-center">
                            <div className="w-8/12">
                                <h1 className="text-2xl my-4">PIN VERIFICATION</h1>
                                <p className="mb-4 text-gray-600 text-sm">4 Digit Verification PIN has been send to your email</p>
                                <input value={pin} type="text" placeholder="4 Digit Pin" className="input w-full bg-white rounded-lg input-bordered" onChange={ (e) => setPin(e.target.value) }/>
                                <button onClick= { handleVerifyLogin } className="btn rounded-lg w-full my-4 btn-primary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OTPPage;