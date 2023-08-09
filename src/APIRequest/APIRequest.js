const baseURL = "https://cart-api.teamrabbil.com/api/";

export async function productListAPI () {

    const apiResult = await fetch(baseURL+"product-list")
    const result =await apiResult.json();
    
    return result.data;
}

export async function userLogin(email){
    const res = await fetch(baseURL+"user-login",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            UserEmail:email,
        })
    })
    const data = await res.json();
    return data;
}

export async function verifyLogin(email,pin){
    const res = await fetch(baseURL+"verify-login",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            UserEmail: email,
            OTP: pin,
        })
    })
    const data = await res.json();
    console.log("this is verify login")
    return data;
}

export async function createCard(ProductID){
    const res = await fetch(baseURL+`create-cart/${ProductID}`,{
        method:"GET",
        headers: {
            "token": localStorage.getItem("token"),
        },
        
    })
    const data = await res.json();
    return data;
}

export async function fetchCartList () {

    const apiResult = await fetch(baseURL+"cart-list",{
        method:"GET",
        headers: {
            "token": localStorage.getItem("token"),
        },
    })
    const result =await apiResult.json();
    return result;
    
}


export async function removeCard(ProductID){
    const res = await fetch(baseURL+`remove-cart/${ProductID}`,{
        method:"GET",
        headers: {
            "token": localStorage.getItem("token"),
        },
        
    })
    const data = await res.json();
    return data;
}