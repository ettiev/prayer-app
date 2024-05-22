import { useState } from "react";

import Note from "./Note";

import style from "./Request.module.css";

function Request ({ type, setPageSetting, requestId, showLoading, hideLoading }) {
    const [request, setRequest] = useState('');
    const [note, setNote] = useState('');
    const [description, setDescription] = useState('');
    const [prevNotesEdit, setPrevNotesEdit] = useState('')
    const [initialize, setInitialize] = useState(false)

    if (!initialize) {
        if (type === "edit") {
            showLoading()
            const url = "http://localhost:4000/single_request/" + requestId.toString();
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
                const editRequest = data.body;
                setRequest(editRequest.request);
                setDescription(editRequest.description);
            })
            .catch((err) => {console.log(err)});

            const urlNotes = "http://localhost:4000/notes/" + requestId.toString();
            const optionsNotes = {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            };
            fetch(urlNotes, optionsNotes)
            .then((response) => {
                console.log("Notes were received from server");
                return response.json()
            })   
            .then((data) => {
                const dataNotes = data.body;
                var noteComponents = '';
                noteComponents = noteComponents + dataNotes.map((note) => {
                    return (<Note 
                        date= { note.date }
                        content= { note.note }    
                    />)
                })
                setPrevNotesEdit(noteComponents);
            })
            .catch((err) => {console.log(err)});
        }
        setInitialize(true);
        hideLoading()
    }    

    function handleChangeRequest(event){
        setRequest(event.target.value);
    }

    function handleChangeNote(event){
        setNote(event.target.value);
    }

    function handleChangeDescription(event){
        setDescription(event.target.value);
    }

    function closeRequest(){
        setPageSetting("main");
    }

    function addNote() {
        showLoading();
        const formData = {
            request: requestId.toString(),
            date: new Date(),
            note: note,
        }
        const url = "http://localhost:4000/add_note"
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
        })
        .catch((err) => {console.log(err)});
        hideLoading();
    }

    function requestSubmit(event) {
        event.preventDefault();
               
        if (type === "new") {
            showLoading(); 
            const formData = {
                request: request,
                description: description,
                note: note,
            }
                        
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
            hideLoading();
        } else if (type === "edit") {
            showLoading();
            const formData = {
                request: request,
                description: description,
            }
            if (note.length > 3) {
                addNote();
            }            
            const url = "http://localhost:4000/edit_request/" + requestId.toString();
            const options = {
                method: "PUT",
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
            hideLoading();
        }
    }

    let prevNotes;
    if (prevNotesEdit === "") {
        prevNotes = (
            <div className="m-4 py-4">
                <h5 className="my-4">There are no requests to display.</h5>
            </div>
        )
    } else {
        prevNotes = prevNotesEdit;
    }
   
    return <div className="container p-4">
        <div id={style.request_edit} className="card">
            <div className="card-body">
                <h2>Prayer Request:</h2>
                <form onSubmit={ requestSubmit }>
                    <div className="input-group p-4">
                        <span className="input-group-text" style={{ width: '100px' }}>Request:</span>
                        <input onChange={ handleChangeRequest } value={ request } name="request" type="text" className="form-control" required/>
                    </div>
                    <div className="input-group p-4">
                        <span className="input-group-text" style={{ width: '100px' }}>Description:</span>
                        <textarea onChange={ handleChangeDescription } name="description" className="form-control" rows={4} value={ description } required></textarea>
                    </div>    
                    <div className="input-group pb-4 px-4">
                        <span className="input-group-text" style={{ width: '100px' }}>Notes: <br />(optional)</span>
                        <textarea onChange={ handleChangeNote } name="note" className="form-control" rows={8} value={ note }></textarea>
                    </div>
                    <div className="text-end">
                        <button type="submit" className="btn btn-success">Save</button>
                        <button type="button" onClick={ closeRequest } className="btn btn-secondary m-4">Cancel</button>
                    </div>
                    { prevNotes }
                </form>    
            </div>
        </div>
    </div>
}

export default Request;