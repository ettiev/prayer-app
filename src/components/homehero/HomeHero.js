import React from 'react';

import style from "./HomeHero.module.css";

function HomeHero(){
  
    return <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-lg-12">
        <h1 id={style.hero_heading} className="display-5 fw-bold lh-1 mb-3">Welcome to Prayer App!<br />Your companion in prayer.</h1>
        <div id={style.description}>
          <p className="lead">Prayer App is a web app where you get to add your prayer requests and notes to help you pray more focussed and effectively!</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-success btn-lg px-4" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
            <button type="button" className="btn btn-success btn-lg px-4" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</button>
          </div>
        </div>  
      </div>
    </div>
  </div>
}

export default HomeHero;