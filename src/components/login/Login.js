import React from "react";

import style from "./modalstyles.module.css";

function Login() {
    return <div class="modal-dialog modal-fullscreen" >
        <div id="loginModal" class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div id={style.login_header} class="modal-header"> 
                        <h5 class="modal-title">Login</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div id={style.login_body} class="modal-body">
                        <p>Enter email and password to login.</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: '100px' }}>Email:</span>
                            <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: '100px' }}>Password:</span>
                            <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success">Login</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
}

export default Login;