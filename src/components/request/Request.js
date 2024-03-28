import Note from "./Note";

import style from "./Request.module.css";

function Request () {
    return <div class="container p-4">
        <div id={style.request_edit} class="card">
            <div class="card-body">
            <h2>Prayer Request:</h2>
            <div class="input-group p-4">
                <span class="input-group-text" style={{ width: '100px' }}>Request:</span>
                <input type="text" class="form-control" required/>
            </div>    
            <p id={style.today_note}>Today:</p>
            <div class="input-group pb-4 px-4">
                <span class="input-group-text" style={{ width: '100px' }}>Notes: <br />(optional)</span>
                <textarea class="form-control" rows={8}></textarea>
            </div>
            <h3>Previous Notes:</h3>
            <Note />
            <div class="text-end">
                <button type="button" class="btn btn-success">Save</button>
                <button type="button" class="btn btn-secondary m-4">Cancel</button>
            </div>
            </div>
        </div>
    </div>
}

export default Request;