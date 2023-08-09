import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from './Pages/ProductPage';
import LoginPage from './Pages/LoginPage';
import CartPage from './Pages/CartPage';
import OTPPage from './Pages/OTPPage';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductPage />}/>
					<Route path="/login" element={<LoginPage />}/>
                    <Route path="/otp" element={<OTPPage />}/>
                    <Route path="/cart-list" element={<CartPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;