import React from "react";
import { useState } from "react";

import style from "./modalstyles.module.css";

function Login({ onLogin, setActiveUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeEmail(event){
        setEmail(event.target.value);
    }

    function handleChangePassword(event){
        setPassword(event.target.value);
    }

    function loginHandler(event){
        event.preventDefault();
        const formData = {
            email: email,
            password: password,
        }
        console.log(formData);

        const url = "http://localhost:4000/user";
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
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const loginUser = {
                _id: data.body._id,
                username: data.body.username,
                email: data.body.email
            }
            setActiveUser(loginUser);
            onLogin();
            
            console.log("User was successfully logged in.")
        })
        .catch((err) => {console.log(err)});
    }

    return <div className="modal-dialog modal-fullscreen" >
        <div id="loginModal" className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div id={style.login_header} className="modal-header"> 
                        <h5 className="modal-title">Login</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <form onSubmit={ loginHandler }>
                        <div id={style.login_body} className="modal-body">
                            <p>Enter email and password to login.</p>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default" style={{ width: '100px' }}>Email:</span>
                                <input name="email" type="email" className="form-control" onChange={ handleChangeEmail } />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default" style={{ width: '100px' }}>Password:</span>
                                <input name="password" type="password" className="form-control" onChange={ handleChangePassword } />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Login</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </form>    
                </div>
            </div>
        </div>
  </div>
}

export default Login;