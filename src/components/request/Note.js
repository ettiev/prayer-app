import style from "./Request.module.css"

function Note({ date, content }) {
    return <div className="card m-4">
        <div className="card-body">
            <p id={ style.prev_date }>Date: { date }</p>
            <p id={ style.prev_note }>{ content }</p>
        </div>
    </div>
}

export default Note;