import style from "./AnsweredRequest.module.css"

function AnsweredRequest(props) {
    const elementId = props.id.toString();
    
    function deleteRequest(requestId) {
        const url = "http://localhost:4000/delete_request/" + requestId ;
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
            console.log(data.message)
            props.getRequests();
        })    
        .catch((err) => {
            console.log(err)
        });
      }
    
    return <div className="card border-secondary m-4" style={{ maxWidth: '18rem', padding: '0px' }}>
        <div id={style.card_answer_header} className="card-header">{props.header}</div>
        <div className="card-body">
            <h6 className="card-title">Description:</h6>
            <p className="card-text">{props.description}</p>
            <button type="button" onClick={ () => {deleteRequest(elementId)}} className="btn btn-danger mx-1">Delete</button>
        </div>
  </div>
}

export default AnsweredRequest;