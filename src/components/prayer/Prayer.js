import Note from "../request/Note";

import style from "./Prayer.module.css";

function Prayer() {
    return <div class="container p-4 mt-4 mb-4">
        <div id={style.request_pray} class="card">
            <div class="card-body">
                <div class="container mt-3">
                    <div class="row">
                        <div class="col-8">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <h5>Time Remaining:</h5>
                                    
                                    <div class="d-flex flex-row">
                                        <p className={style.time_heading}>Current Request:</p>
                                        <span id={style.time_current} class="badge rounded-pill text-bg-success my-3">0:00:00</span>   
                                    </div>
                                    <div class="progress mb-3" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-success" style={{ width: '25%' }}></div>
                                    </div>
                                    
                                    <div class="d-flex flex-row">
                                        <p className={style.time_heading}>Prayer Session:</p>
                                        <span id={style.time_session} class="badge rounded-pill text-bg-success my-3">0:00:00</span>    
                                    </div>
                                    
                                    <div class="progress mb-3" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-success" style={{ width: '25%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card">
                                <div class="card-body d-flex flex-column">
                                    <button type="button " class="btn btn-secondary m-2">Next Request</button>
                                    <button type="button" class="btn btn-secondary m-2">Pause Session</button>
                                    <button type="button" class="btn btn-danger m-2">Stop Session</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>Pray for...</h2>
                <div class="card" style={{ margin: "10px 24px 30px 24px", padding: "15px"}}>
                    <div class="class-body text-center">
                        <h1>Test Prayer Request</h1>    
                    </div>
                </div>   
                <p id={style.new_note}>Today:</p>
                <div>
                    <div class="input-group pb-4 px-4">
                        <span class="input-group-text" style={{ width: '100px' }}>New Note <br /> (optional):</span>
                        <textarea class="form-control" rows={8}></textarea>
                    </div>
                    <button type="button" class="btn btn-success float-end" style={{ margin: '0px 24px 24px 24px' }}>Add Note</button>
                </div>
                <div style={{ marginTop: '50px' }}>
                    <h3>Previous Notes:</h3>
                    <Note />    
                </div>
            </div>
        </div>
    </div>    
}

export default Prayer;