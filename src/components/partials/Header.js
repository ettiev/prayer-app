import React from 'react';

function Header () {
    return <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">
        <div class="col-md-3 mb-2 mb-md-0">
            <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                <img src={require("../../images/logos/prayer_app_logo.jpg")} alt="prayer app logo" width="180" height="100" />
            </a>
        </div>

        <div class="col-md-3 text-end">
            <button type="button" class="btn btn-success me-2">Login</button>
            <button type="button" class="btn btn-success me-2">Sign-up</button>
        </div>
        </header>
    </div>    
    
}

export default Header;