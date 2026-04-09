import React from 'react'
import { Link } from "react-router-dom";
import useAuthStatus from "../auth/useAuthStatus";

function Hero() {
    const { isCheckingAuth, isAuthenticated } = useAuthStatus();

    return ( 
        <div className='Container p-5 mb-5'>
            <div className='row text-center '>
                <img src='media/images/homeHero.png'  alt='Home Page'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                {isCheckingAuth ? null : isAuthenticated ? (
                    <a
                        className='btn btn-primary p-2 fs-5 mb-5'
                        style={{width:"20%", margin:"0 auto"}}
                        href="http://localhost:3001"
                    >
                        Go to Dashboard
                    </a>
                ) : (
                    <Link
                        className='btn btn-primary p-2 fs-5 mb-5'
                        style={{width:"20%", margin:"0 auto"}}
                        to="/signup"
                    >
                        Sign Up for Free
                    </Link>
                )}
            </div>
            </div>
 );
}

export default Hero;