import React from 'react';

import style from "./Header_Footer.module.css";

function Footer () {
    return <div id={style.footer}>
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-2 my-4">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    {/* [Insert logo] */}
                    </a>
                    <span class="mb-3 mb-md-0 text-body-white">© 2024 - My Fake WebDev Co</span>
                </div>
            </footer>
        </div>
    </div>
}

export default Footer;