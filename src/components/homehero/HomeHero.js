import React from 'react';

import style from "./HomeHero.module.css";

function HomeHero(){
    return <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-lg-12">
        <h1 id={style.hero_heading} class="display-5 fw-bold lh-1 mb-3">Welcome to Prayer App!<br />Your companion in prayer.</h1>
        <div id={style.description}>
          <p class="lead">Prayer App is a web app where you get to add your prayer requests and notes to help you pray more focussed and effectively!</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-success btn-lg px-4" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
            <button type="button" class="btn btn-success btn-lg px-4" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</button>
          </div>
        </div>  
      </div>
    </div>
  </div>
}

export default HomeHero;