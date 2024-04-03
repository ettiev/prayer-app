import React from 'react';

import style from "./Header_Footer.module.css";

function Footer () {
    return <div id={style.footer}>
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-body-white" style={{ minWidth: "250px"}}>© 2024 - <a href='https://www.myfakewebdevco.co.za/' style={{ textDecoration: "none", color: "#ffffff" }}>My Fake WebDev Co.</a></span>
                </div>
                <div>
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <img src={require("../../images/logos/prayerapp_logo.png")} alt='Prayer App Logo' style={{ maxHeight: "200px"}} />        
                    </a>
                </div>
            </footer>
        </div>
    </div>
}

export default Footer;