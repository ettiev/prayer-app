import React, { useState } from "react";

import style from "./modalstyles.module.css";

function SignUp({ showLoading, hideLoading }) { 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    function handleChangeUsername(event){
        setUsername(event.target.value);
    }

    function handleChangeEmail(event){
        setEmail(event.target.value);
    }

    function handleChangePassword(event){
        setPassword(event.target.value);
    }

    function handleChangeConfirmPassword(event){
        setConfirmPassword(event.target.value);
    }

    function signupHandler(event){
        event.preventDefault();
        showLoading();
        const formData = {
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        console.log(formData);

        const url = "http://localhost:4000/new_user";
        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            credentials: "include",
        };
        fetch(url, options)
        .then((response) => {
            console.log("Fetch response was received from server.")
            return response.json()
        })    
        .then((data) => {
            console.log(data)
            hideLoading();
        });
       
    }

    return <div className="modal-dialog modal-fullscreen" >
        <div id="signupModal" className="modal fade" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div id={style.signup_header} className="modal-header"> 
                        <h5 className="modal-title">Sign Up</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={signupHandler}>
                        <div id={style.signup_body} className="modal-body">
                            <p>Enter username, email and password to signup.</p>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default" style={{ width: '161px' }}>Username:</span>
                                <input type="text" className="form-control" name="username" onChange={handleChangeUsername} value={username}/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default" style={{ width: '161px' }}>Email:</span>
                                <input type="email" className="form-control" name="email" onChange={handleChangeEmail} value={email}/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default" style={{ width: '161px' }}>Password:</span>
                                <input type="password" className="form-control" name="password" onChange={handleChangePassword} value={password}/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default" style={{ width: '161px' }}>Confirm Password:</span>
                                <input type="password" className="form-control" name="confirmPassword" onChange={handleChangeConfirmPassword} value={confirmPassword}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Sign Up</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  </div>
}

export default SignUp;