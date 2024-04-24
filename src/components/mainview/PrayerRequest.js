import style from "./PrayerRequest.module.css"
function PrayerRequest(props) {
    const elementId = props._id

    function answerRequest(requestId) {
        const url = "http://localhost:4000/answer_request/" + {requestId} ;
        const options = {
      method: "PUT",
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
    })    
    .catch((err) => {
      console.log(err)
    });
  }

  function deleteRequest(requestId) {
    const url = "http://localhost:4000/delete_request/" + {requestId} ;
    const options = {
    method: "DELETE",
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
        console.log(data.message);
        props.getRequests();
    })    
    .catch((err) => {
        console.log(err)
    });
  }
    
  return <div className="card border-secondary m-4" style={{ maxWidth: '18rem' }}>
        <div id={style.card_request_header} className="card-header">{props.header}</div>
        <div className="card-body">
            <button type="button" onClick={ () => answerRequest(elementId) } className="btn btn-success mx-1">Answered!</button>
            <button type="button" onClick={ () => deleteRequest(elementId) } className="btn btn-danger mx-1">Delete</button>
        </div>
  </div>
}

export default PrayerRequest;