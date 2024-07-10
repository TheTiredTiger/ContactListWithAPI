import { Context } from "./Context";
import { useContext } from "react";


function Modal ({index}) {
    const { delData } = useContext(Context)

    return (
        <>
            <button type="button" index={index}>
                <i className="fa fa-trash m-3"></i> 
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        If you delete this, the entire universe will collapse and there will be no more baby animals.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                No, turn back!
                            </button>
                            <button type="button" className="btn btn-primary"
                            onClick={() => delData(index)}>
                                I regret nothing.
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;