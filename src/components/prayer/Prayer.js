import Note from "../request/Note";

import style from "./Prayer.module.css";

function Prayer() {
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
                                        <span id={style.time_current} className="badge rounded-pill text-bg-success my-3">0:00:00</span>   
                                    </div>
                                    <div className="progress mb-3" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-success" style={{ width: '25%' }}></div>
                                    </div>
                                    
                                    <div className="d-flex flex-row">
                                        <p className={style.time_heading}>Prayer Session:</p>
                                        <span id={style.time_session} className="badge rounded-pill text-bg-success my-3">0:00:00</span>    
                                    </div>
                                    
                                    <div className="progress mb-3" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-success" style={{ width: '25%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body d-flex flex-column">
                                    <button type="button " className="btn btn-secondary m-2">Next Request</button>
                                    <button type="button" className="btn btn-secondary m-2">Pause Session</button>
                                    <button type="button" className="btn btn-danger m-2">Stop Session</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>Pray for...</h2>
                <div className="card" style={{ margin: "10px 24px 30px 24px", padding: "15px"}}>
                    <div className="class-body text-center">
                        <h1>Test Prayer Request</h1>    
                    </div>
                </div>   
                <p id={style.new_note}>Today:</p>
                <div>
                    <div className="input-group pb-4 px-4">
                        <span className="input-group-text" style={{ width: '100px' }}>New Note <br /> (optional):</span>
                        <textarea className="form-control" rows={8}></textarea>
                    </div>
                    <button type="button" className="btn btn-success float-end" style={{ margin: '0px 24px 24px 24px' }}>Add Note</button>
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