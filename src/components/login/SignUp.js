import React from "react";

import style from "./modalstyles.module.css";

function SignUp() {
    return <div className="modal-dialog modal-fullscreen" >
        <div id="signupModal" className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div id={style.signup_header} className="modal-header"> 
                        <h5 className="modal-title">Sign Up</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div id={style.signup_body} className="modal-body">
                        <p>Enter username, email and password to signup.</p>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default" style={{ width: '161px' }}>Username:</span>
                            <input type="name" className="form-control" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default" style={{ width: '161px' }}>Email:</span>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default" style={{ width: '161px' }}>Password:</span>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default" style={{ width: '161px' }}>Confirm Password:</span>
                            <input type="password" className="form-control" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success">Sign Up</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
}

export default SignUp;