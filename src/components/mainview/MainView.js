import AnsweredRequest from "./AnsweredRequest";
import PrayerRequest from "./PrayerRequest";

import style from "./MainView.module.css";

function MainView({ addRequest, editRequest, pRequests, aRequests, getRequests }) {
      
    let prayerRequestCards
    if (pRequests.length > 0) {
        prayerRequestCards= pRequests.map((request) => {
        return <PrayerRequest 
            key={request._id}
            id={request._id}
            description={request.description}
            header={request.request}
            getRequests={ getRequests }
            editRequest= { () => {editRequest(request._id.toString())}}
        />
        })
    } else {
        prayerRequestCards = (
            <div className="m-4 py-4">
                <h5 className="my-4">There are no requests to display.</h5>
            </div>
        )
    }

    let answeredRequestCards
    if (aRequests.length > 0) {
        answeredRequestCards = aRequests.map((request) => {
            return <AnsweredRequest 
                key={request._id}
                id={request._id}
                description={request.description}
                header={request.request}
                getRequests={ getRequests }
                editRequest= { () => {editRequest(request._id.toString())}}
            />
        })
    } else {
        answeredRequestCards = (
            <div className="m-4 py-4">
                <h5 className="my-4">There are no requests to display.</h5>
            </div>
        )
    }

    return <div className="container">
        <div id={style.button_card} className="card my-3 p-3">
            <div className="card-body d-flex justify-content-evenly">
                <button type="button" className="btn btn-success btn-lg px-4" style={{ width: "180px" }} data-bs-toggle="modal" data-bs-target="#timeModal">Pray!</button>
                <button type="button" className="btn btn-success btn-lg px-4" style={{ width: "180px" }} onClick={ addRequest }>Add Request</button>
            </div>
        </div>
        <div id={style.request_card} className="card my-3 p-3">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" style={{ color: "#064929" }}>Prayer Request</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false" style={{ color: "#064929" }}>Answered Prayers</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent" style={{ backgroundColor: "#ffffff", borderRadius: "0px 10px 10px 10px" }} >
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                    <div className="container">
                        <div className="row">
                            { prayerRequestCards }
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                    <div className="container">
                        <div className="row">
                            { answeredRequestCards }
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
}

export default MainView;