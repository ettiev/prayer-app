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
import LoadingSpinner from './components/partials/LoadingSpinner';

function App() {
  const [ loginStateConfirmed, setLoginStateConfirmed] = useState(false);
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ prayerSessionTime, setPrayerSessionTime] = useState(0);
  const [ pageSetting, setPageSetting ] = useState("none");
  const [ activeUser, setActiveUser] = useState({
    _id: "",
    username: "",
    email:""
  });
  const [prayerRequests, setPrayerRequests] = useState([]);
  const [answeredRequests, setAnsweredRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editRequestId, setEditRequestId] = useState('');
  
  function login() {
    setLoggedIn(true);
    setPageSetting("main");
    getRequests();
    console.log("User was successfully logged in.")
  };

  function getRequests() {
    setLoading(true);
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
        setLoading(false);
      })
      .catch((err) => {console.log(err)});
  }

  function logout() {
    setLoading(true);
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
    setLoading(false);
  }

  function startPrayer(prayerTime) {
    setPageSetting("pray");
    setPrayerSessionTime(prayerTime);
  }

  function addRequest() {
    setPageSetting("request")
  }

  function editRequest(requestId) {
    setPageSetting("edit");
    setEditRequestId(requestId);
  }

  function loadPage() {
    //setLoading(true);
    //if (loggedIn) {
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
          if (data.body.isLoggedIn === true) {
            setActiveUser(data.body.user);
            login();
          } else {
            logout();
          }
      })
      .catch((err) => {console.log(err)});
    //}  
  }
    

  if (!loginStateConfirmed) {
    loadPage();
    setLoginStateConfirmed(true);
  }
  //setLoading(false);

  let pageDisplay;
  if (loggedIn) {
    if (pageSetting === "main") {
      pageDisplay = (<>
        <PrayerTimeModal
          onStartPrayer={ startPrayer } />
        <MainView 
          addRequest={ addRequest }
          editRequest={ editRequest }
          pRequests={ prayerRequests }
          aRequests={ answeredRequests }
          getRequests={ getRequests }
        />
      </>)  
    } else if (pageSetting === "request") {
      pageDisplay = (
        <Request 
          type="new"
          setPageSetting= { setPageSetting }
          requestId= { '' }
        />
      )
    } else if (pageSetting === "edit") {
      pageDisplay = (
        <Request 
          type="edit"
          setPageSetting= { setPageSetting }
          requestId= { editRequestId }
        />
      )  
    } else if (pageSetting === "pray") {
      pageDisplay = (
        <Prayer
          prayerSession= { prayerSessionTime } 
          prayerRequests= { prayerRequests }
          setPageSetting= { setPageSetting }
        />
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
        loggedIn= { loggedIn }
        onLogout= { logout }
        activeUser= { activeUser } />
      { loading && <LoadingSpinner /> }
      <Login
        onLogin= { login }
        setActiveUser= { setActiveUser }
        setLoading={ setLoading } 
        />
      <SignUp 
        setLoading= { setLoading }
      />
        { pageDisplay }
      <Footer /> 
    </div>
  );
}

export default App;
