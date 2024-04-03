import Note from "./Note";

import style from "./Request.module.css";

function Request () {
    return <div className="container p-4">
        <div id={style.request_edit} className="card">
            <div className="card-body">
            <h2>Prayer Request:</h2>
            <div className="input-group p-4">
                <span className="input-group-text" style={{ width: '100px' }}>Request:</span>
                <input type="text" className="form-control" required/>
            </div>    
            <p id={style.today_note}>Today:</p>
            <div className="input-group pb-4 px-4">
                <span className="input-group-text" style={{ width: '100px' }}>Notes: <br />(optional)</span>
                <textarea className="form-control" rows={8}></textarea>
            </div>
            <h3>Previous Notes:</h3>
            <Note />
            <div className="text-end">
                <button type="button" className="btn btn-success">Save</button>
                <button type="button" className="btn btn-secondary m-4">Cancel</button>
            </div>
            </div>
        </div>
    </div>
}

export default Request;