import React from 'react';
import "./index.css";
import ReactDOM from 'react-dom/client';
import HomePage from './landing_page/home/HomePage';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import axios from "axios";
import Signup from "./landing_page/signup/Signup";
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import NavBar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Login from './landing_page/signup/Login'
import NotFound from './landing_page/NotFound';
import RedirectIfAuthenticated from "./landing_page/auth/RedirectIfAuthenticated";
import ForgetPasswordPage from './landing_page/resetUserPass/ForgetPassPage';

axios.defaults.withCredentials = true;

function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<RedirectIfAuthenticated><Signup /></RedirectIfAuthenticated>} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='/login' element={<RedirectIfAuthenticated><Login /></RedirectIfAuthenticated>} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path='/forget-password' element={<ForgetPasswordPage />} />
    </Routes>
  </BrowserRouter>
);


