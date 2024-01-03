import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import ShopNow from './components/ShopNow';
// import Login from './components/Login';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import CheckEmail from './components/CheckEmail';
import ForgotPass from './components/ForgotPass';
import Register from './components/Register';
import Wishlist from './components/Wishlist';
import Login_Register from './components/Login_Register';
import AddOrder from './components/AddOrder';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/register' element={<Register />} />
          <Route path='/check_email' element={<CheckEmail />} />
          <Route path='/forgot_password' element={<ForgotPass />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/shopNow" element={<ShopNow />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add_order" element={<AddOrder />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login_register" element={<Login_Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
