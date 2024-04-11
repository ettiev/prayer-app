import React from "react";

import style from "./PrayerTimeModal.module.css";

function PrayerTimeModal({ onStartPrayer }) {
        
    return <div className="modal-dialog modal-fullscreen" >
        <div id="timeModal" className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div id={style.time_header} className="modal-header"> 
                        <h5 className="modal-title">Enter Prayer Time</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div id={style.time_body} className="modal-body">
                        <p>Enter the amount of minutes for this prayer session.</p>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default" style={{ width: '100px' }}>Minutes:</span>
                            <input type="number" className="form-control" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={ onStartPrayer } type="button" className="btn btn-success" data-bs-dismiss="modal">Start Prayer Session</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
}

export default PrayerTimeModal;