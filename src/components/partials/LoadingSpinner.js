function LoadingSpinner() {

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="text-center">
                        <div className="spinner-border text-success" style={{ width: "5rem", height: "5rem"}} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>    
            </div>
        </div>    
    )
}

export default LoadingSpinner;