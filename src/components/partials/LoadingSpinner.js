function LoadingSpinner() {
    
    return (
        <div className="modal fade show" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" style={{display: "block"}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="text-center">
                        <div className="modal-body">
                            <div className="spinner-border text-success" style={{ width: "5rem", height: "5rem"}} role="status">
                                <span className="visually-hidden">Loading...</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingSpinner;