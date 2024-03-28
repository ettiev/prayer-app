import React from "react";

import style from "./modalstyles.module.css";

function SignUp() {
    return <div class="modal-dialog modal-fullscreen" >
        <div id="signupModal" class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div id={style.signup_header} class="modal-header"> 
                        <h5 class="modal-title">Sign Up</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div id={style.signup_body} class="modal-body">
                        <p>Enter email and password to login.</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: '161px' }}>Email:</span>
                            <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: '161px' }}>Password:</span>
                            <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default" style={{ width: '161px' }}>Confirm Password:</span>
                            <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success">Sign Up</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
}

export default SignUp;