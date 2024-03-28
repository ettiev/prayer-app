import React from 'react';

import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Background from "./components/partials/Background";
import HomeHero from "./components/homehero/HomeHero";
import MainView from './components/mainview/MainView';
import Request from "./components/request/Request";
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';


import "./App.module.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Login />
      <SignUp />
      {/* <HomeHero /> */}
      {/* <MainView /> */}
      <Request />
      <Footer /> 
    </div>
  );
}

export default App;
