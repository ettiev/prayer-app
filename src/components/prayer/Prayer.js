import { useState } from "react";

import Note from "../request/Note";

import style from "./Prayer.module.css";
import CountdownTimer from "./CountdownTimer";

function Prayer({ prayerSession, prayerRequests, setPageSetting, showLoading, hideLoading }) {
    if (prayerRequests) {
        const fullSessionTime = prayerSession * 60;
        const countRequests = prayerRequests.length;
        const singleRequestTime = Math.floor(fullSessionTime/countRequests)
        
        const [pause, setPause] = useState(false);
        const [ppButton, setPPButton] = useState("Pause Session");
        const [currentRequest, setCurrentRequest] = useState(prayerRequests[0]);
        const [counter, setCounter] = useState(0);
        const [notes, setNotes] = useState('');
        const [newNote, setNewNote] = useState('');
        const [initialized, setInitialized] = useState(false);

        if (!initialized) {
            showLoading();
            const url = "http://localhost:4000/notes/" + prayerRequests[0]._id.toString();
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
                console.log("Notes were received from server");
                return response.json()
            })   
            .then((data) => {
                const dataNotes = data.body;
                var noteComponents = '';
                noteComponents = dataNotes.map((note) => {
                    return (<Note 
                        date= { note.date }
                        content= { note.note }    
                    />)
            })
            setNotes(noteComponents);
            hideLoading();
            })
            .catch((err) => {console.log(err)});
            setInitialized(true);
        }
        
        function pausePlaySession() {
            if (pause) {
                setPause(false);
                setPPButton("Pause Session");
            } else {
                setPause(true)
                setPPButton("Continue Session");
            }
        };
        
        function nextRequest() {
            setNotes('');
            if ((counter + 1) >= countRequests ) {
                stopSession();
            } else {
                showLoading()
                const url = "http://localhost:4000/notes/" + prayerRequests[counter + 1]._id.toString();
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
                    console.log("Notes were received from server");
                    return response.json()
                })   
                .then((data) => {
                    const dataNotes = data.body;
                    var noteComponents = '';
                    noteComponents = dataNotes.map((note) => {
                         return (<Note 
                                date= { note.date }
                                content= { note.note }    
                            />)
                    })
                    setNotes(noteComponents);
                    hideLoading();
                })
                .catch((err) => {console.log(err)});
                setCurrentRequest(prayerRequests[counter + 1]);
                setCounter(counter + 1);
            }
        };

        function changeNoteHandler(event) {
            setNewNote(event.target.value);
        }

        function addNote() {
            showLoading();
            const formData = {
                request: currentRequest._id.toString(),
                date: new Date(),
                note: newNote,
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
                hideLoading();
            })
            .catch((err) => {console.log(err)});
            setNewNote('');
        }

        function stopSession() {
            setPageSetting("main");
        };

        var displayNotes;
        if (notes.length === 0) {
            displayNotes = (
                <div className="m-4 py-4">
                    <h5 className="my-4">There are no requests to display.</h5>
                </div>
            )
        } else {
            displayNotes = notes;
        }

        return <div className="container p-4 mt-4 mb-4">
            <div id={style.request_pray} className="card">
                <div className="card-body">
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5>Time Remaining:</h5>
                                        
                                        <div className="d-flex flex-row">
                                            <p className={style.time_heading}>Current Request:</p>
                                            <CountdownTimer 
                                                secondsLeft= { singleRequestTime } 
                                                pause= { pause } 
                                                endFunction= { nextRequest }
                                                loop= { true } 
                                            /> 
                                        </div>
                                        
                                        
                                        <div className="d-flex flex-row">
                                            <p className={style.time_heading}>Prayer Session:</p>
                                            <CountdownTimer 
                                                secondsLeft= { fullSessionTime }
                                                pause= { pause }
                                                endFunction = { stopSession }
                                                loop= { false }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body d-flex flex-column">
                                        {/* <button type="button" className="btn btn-secondary m-2">Next Request</button> */}
                                        <button type="button" onClick={ pausePlaySession } className="btn btn-secondary m-2">{ ppButton }</button>
                                        <button type="button" onClick={ stopSession } className="btn btn-danger m-2">Stop Session</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2>Pray for...</h2>
                    <div className="card" style={{ margin: "10px 24px 30px 24px", padding: "15px"}}>
                        <div className="class-body text-center">
                            <h1>{ currentRequest.request }</h1>    
                        </div>
                        <div>
                            <p>{ currentRequest.description }</p>
                        </div>
                    </div>   
                    <p id={style.new_note}>Today:</p>
                    <div>
                        <div className="input-group pb-4 px-4">
                            <span className="input-group-text" style={{ width: '100px' }}>New Note <br /> (optional):</span>
                            <textarea className="form-control" onChange={ changeNoteHandler } rows={8} value={ newNote } ></textarea>
                        </div>
                        <button type="button" onClick={ addNote } className="btn btn-success float-end" style={{ margin: '0px 24px 24px 24px' }}>Add Note</button>
                    </div>
                    <div style={{ marginTop: '50px' }}>
                        <h3>Previous Notes:</h3>
                        { displayNotes }
                    </div>
                </div>
            </div>
        </div> 
    } else {
        setPageSetting("main");
        throw new Error("There are no prayer requests!");
    }       
}

export default Prayer;