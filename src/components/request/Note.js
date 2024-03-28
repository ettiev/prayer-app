import style from "./Request.module.css"

function Note() {
    return <div class="card m-4">
        <div class="card-body">
            <p id={ style.prev_date }>Date: 28/03/2024</p>
            <p id={ style.prev_note }>This is a test note.</p>
        </div>
    </div>
}

export default Note;