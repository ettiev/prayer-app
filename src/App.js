import React from 'react';

import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Background from "./components/partials/Background";
import HomeHero from "./components/homehero/HomeHero";
import MainView from './components/mainview/MainView';

import "./App.module.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <MainView />
      {/* <HomeHero /> */}
      <Footer /> 
    </div>
  );
}

export default App;
