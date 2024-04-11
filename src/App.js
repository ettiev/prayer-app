import { useState } from 'react';

import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Background from "./components/partials/Background";
import HomeHero from "./components/homehero/HomeHero";
import MainView from './components/mainview/MainView';
import Request from "./components/request/Request";
import Prayer from './components/prayer/Prayer';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import PrayerTimeModal from './components/prayer/PrayerTimeModal';


import "./App.module.css";

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ pageSetting, setPageSetting ] = useState("none");
  
  function login() {
    setLoggedIn(true);
    setPageSetting("main")
  };

  function logout() {
    setLoggedIn(false);
    setPageSetting("none");
  }

  function startPrayer() {
    setPageSetting("pray");  
  }

  let pageDisplay;
  if (loggedIn) {
    
    if (pageSetting === "main") {
      pageDisplay = (<>
        <PrayerTimeModal
          onStartPrayer={ startPrayer } />
        <MainView />
      </>)  
    } else if (pageSetting === "request") {
      pageDisplay = (
        <Request />
      )  
    } else if (pageSetting === "pray") {
      pageDisplay = (
        <Prayer
          prayerSession="10" />
      )  
    } else {
      pageDisplay = (
        <HomeHero />
      )  
    }
  
  } else {
    pageDisplay = (
      <HomeHero />
    )
  }

  return (
    <div className="App">
      <Background />
      <Header
        loggedIn={ loggedIn }
        onLogout= { logout } />
      <Login
        onLogin= { login } />
      <SignUp />
      
      { pageDisplay }
            
      <Footer /> 
    </div>
  );
}

export default App;
