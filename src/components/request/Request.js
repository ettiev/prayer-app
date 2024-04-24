import { useState } from "react";

import Note from "./Note";

import style from "./Request.module.css";

function Request ({ type, setPageSetting }) {
    const [request, setRequest] = useState('');
    const [note, setNote] = useState('');

    function handleChangeRequest(event){
        setRequest(event.target.value);
    }

    function handleChangeNote(event){
        setNote(event.target.value);
    }

    let prevNotes = "";
    let noteHeading = "";
    if (type !== "new") {
        noteHeading = (
            <p id={style.today_note}>Today:</p>
        )
        prevNotes = (<>
            <h3>Previous Notes:</h3>
            <Note />
        </>)
    }

    function requestSubmit(event) {
        event.preventDefault();        
        if (type === "new") {
            const formData = {
                request: request,
                note: note,
            }
            console.log(formData);
            
            const url = "http://localhost:4000/add_request";
            const options = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                credentials: "include",
            };

            fetch(url, options)
            .then((response) => {
                console.log("Fetch response was received from server");
                return response.json()
            })   
            .then((data) => {
                console.log(data.message)
                setPageSetting("main")
            })
            .catch((err) => {console.log(err)});
        } else {

        }
    }
   
    return <div className="container p-4">
        <div id={style.request_edit} className="card">
            <div className="card-body">
                <h2>Prayer Request:</h2>
                <form onSubmit={  requestSubmit }>
                    <div className="input-group p-4">
                        <span className="input-group-text" style={{ width: '100px' }}>Request:</span>
                        <input onChange={ handleChangeRequest } value={ request } name="request" type="text" className="form-control" required/>
                    </div>    
                    { noteHeading }
                    <div className="input-group pb-4 px-4">
                        <span className="input-group-text" style={{ width: '100px' }}>Notes: <br />(optional)</span>
                        <textarea onChange={ handleChangeNote } name="note" className="form-control" rows={8} value={ note }></textarea>
                    </div>
                    { prevNotes }
                    <div className="text-end">
                        <button type="submit" className="btn btn-success">Save</button>
                        <button type="button" className="btn btn-secondary m-4">Cancel</button>
                    </div>
                </form>    
            </div>
        </div>
    </div>
}

export default Request;