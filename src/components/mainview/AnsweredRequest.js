import style from "./AnsweredRequest.module.css"

function AnsweredRequest() {
    return <div class="card border-secondary m-4" style={{ maxWidth: '18rem' }}>
        <div id={style.card_answer_header} class="card-header">Header</div>
        <div class="card-body">
            <h6 class="card-title">Notes:</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" class="btn btn-danger mx-1">Delete</button>
        </div>
  </div>
}

export default AnsweredRequest;