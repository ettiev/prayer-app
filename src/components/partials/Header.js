import React from 'react';

import style from "./Header_Footer.module.css";

function Header ({ loggedIn, onLogout }) {
    
    const user = "Test User"

    let loginDisplay;
    if (loggedIn) {
        loginDisplay = (
            <div className="col-md-3 text-end">
                <div className="d-flex justify-content-center align-items-center">
                    <h6 className='text-start'>User: <br /> {user}</h6>
                    <button onClick={ onLogout } type="button" className="btn btn-danger mx-3">Logout</button>    
                </div>    
            </div>
        )
    } else {
        loginDisplay = (
            <div className="col-md-3 text-end">
                <button type="button" className="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                <button type="button" className="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#signupModal">Sign-up</button>
            </div>    
        )
    };
        
    return <div id={style.header}>
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img src={require("../../images/logos/prayer_app_logo.jpg")} alt="prayer app logo" width="180" height="100" />
                    </a>
                </div>

                { loginDisplay }
            
            </header>
        </div>
    </div>    
}

export default Header;