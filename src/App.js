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
  const [ loginStateConfirmed, setLoginStateConfirmed] = useState(false);
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ pageSetting, setPageSetting ] = useState("none");
  const [ activeUser, setActiveUser] = useState({
    _id: "",
    username: "",
    email:""
  });
  const [prayerRequests, setPrayerRequests] = useState([]);
  const [answeredRequests, setAnsweredRequests] = useState([]);
  
  function login() {
    setLoggedIn(true);
    setPageSetting("main");
    getRequests();
  };

  function getRequests() {
    const url = "http://localhost:4000/requests";
    const options = {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    fetch(url, options)
    .then((response) => {
      console.log("Fetch response was received from server");
        return response.json()
    })   
    .then((data) => {
      setPrayerRequests(data.body.pRequests);
      setAnsweredRequests(data.body.aRequests)
    })
    .catch((err) => {console.log(err)});
  }

  function logout() {
    const url = "http://localhost:4000/logout";
    const options = {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify( activeUser ),
      credentials: "include",
    };

    fetch(url, options)
    .then((response) => {
      console.log("Fetch response was received from server");
      return response.json()
    })   
    .then((data) => {
      console.log(data.message)
    })
    .catch((err) => {console.log(err)});
  
    setActiveUser({
      _id: "",
      username: "",
      email:""
    })
    setLoggedIn(false);
    setPageSetting("none");
  }

  function startPrayer() {
    setPageSetting("pray");  
  }

  function addRequest() {
    setPageSetting("request")
  }

  function loadPage() {
    const url = "http://localhost:4000/login_status";
    const options = {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    fetch(url, options)
    .then((response) => {
      console.log("Fetch response was received from server");
      return response.json()
    })   
    .then((data) => {
      console.log(data.message)
        if (data.body.isLoggedIn) {
          setActiveUser(data.body.user);
          login();
        } else {
          logout();
        }
    })
    .catch((err) => {console.log(err)});
  }

  if (!loginStateConfirmed) {
    loadPage();
    setLoginStateConfirmed(true);
  }

  let pageDisplay;
  if (loggedIn) {
    if (pageSetting === "main") {
      pageDisplay = (<>
        <PrayerTimeModal
          onStartPrayer={ startPrayer } />
        <MainView 
          addRequest={ addRequest }
          pRequests={ prayerRequests }
          aRequests={ answeredRequests }
          getRequests={ getRequests }
        />
      </>)  
    } else if (pageSetting === "request") {
      pageDisplay = (
        <Request 
          type="new"
          setPageSetting= {setPageSetting}
        />
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
        onLogout= { logout }
        activeUser= { activeUser } />
      <Login
        onLogin= { login }
        setActiveUser= { setActiveUser } />
      <SignUp />
      
      { pageDisplay }
            
      <Footer /> 
    </div>
  );
}

export default App;
