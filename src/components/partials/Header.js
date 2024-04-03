import React from 'react';

import style from "./Header_Footer.module.css";

function Header () {
    return <div id={style.header}>
        <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">
            <div class="col-md-3 mb-2 mb-md-0">
                <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                    <img src={require("../../images/logos/prayer_app_logo.jpg")} alt="prayer app logo" width="180" height="100" />
                </a>
            </div>

            <div class="col-md-3 text-end">
                <button type="button" class="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                <button type="button" class="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#signupModal">Sign-up</button>
            </div>
            </header>
        </div>
    </div>    
    
}

export default Header;