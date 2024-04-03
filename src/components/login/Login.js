import React from "react";

import style from "./modalstyles.module.css";

function Login() {
    return <div className="modal-dialog modal-fullscreen" >
        <div id="loginModal" className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div id={style.login_header} className="modal-header"> 
                        <h5 className="modal-title">Login</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div id={style.login_body} className="modal-body">
                        <p>Enter email and password to login.</p>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default" style={{ width: '100px' }}>Email:</span>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default" style={{ width: '100px' }}>Password:</span>
                            <input type="password" className="form-control" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success">Login</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
}

export default Login;