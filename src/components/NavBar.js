import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
           
    <div className="preloader d-flex align-items-center justify-content-center">
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

   
    
    <header className="header-area">
       
        <div className="oneMusic-main-menu">
            <div className="classy-nav-container breakpoint-off">
                <div className="container">
                   
                    <nav className="classy-navbar justify-content-between" id="oneMusicNav">

                       
                        <a href="index.html" className="nav-brand"><img src="/img/core-img/logo.png" alt=""/></a>

                        
                        <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                      
                        <div className="classy-menu">

                           
                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                            </div>

                           
                            <div className="classynav">
                                <ul>
                                    <li><Link to="/">Lilycs</Link></li>
                                    <li><Link to="/free-mp3">Free-Mp3</Link></li>
                                    <li><Link to="/bibliograph">Bibliograph</Link></li>
                                </ul>

                                
                                {/*<div className="login-register-cart-button d-flex align-items-center">
                                    
                                    <div className="login-register-btn mr-50">
                                        <a href="login.html" id="loginBtn">Login / Register</a>
                                    </div>

                                    
                                    <div className="cart-btn">
                                        <p><span className="icon-shopping-cart"></span> <span className="quantity">1</span></p>
                                    </div>
                                </div>*/}
                            </div>
                           

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
   
    <section className="breadcumb-area bg-img bg-overlay">
        <div className="bradcumbContent">
            <p>See what’s new</p>
            <h2>Latest Albums</h2>
        </div>
    </section>
 
    
        </div>
    )
}

export default NavBar
