import style from "./AnsweredRequest.module.css"

function AnsweredRequest() {
    return <div className="card border-secondary m-4" style={{ maxWidth: '18rem' }}>
        <div id={style.card_answer_header} className="card-header">Header</div>
        <div className="card-body">
            <h6 className="card-title">Notes:</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" className="btn btn-danger mx-1">Delete</button>
        </div>
  </div>
}

export default AnsweredRequest;