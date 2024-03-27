import AnsweredRequest from "./AnsweredRequest";
import PrayerRequest from "./PrayerRequest";

function MainView() {
    return <div className="container">
        <div class="card my-3 p-3">
            <div class="card-body d-flex justify-content-evenly">
                <button type="button" class="btn btn-success btn-lg px-4">Pray!</button>
                <button type="button" class="btn btn-success btn-lg px-4">Add Request</button>
            </div>
        </div>
        <div class="card my-3 p-3">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Prayer Request</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Answered Prayers</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    <PrayerRequest />
                </div>
                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                    <AnsweredRequest />
                </div>
            </div>

        </div>    
        

    </div>
}

export default MainView;