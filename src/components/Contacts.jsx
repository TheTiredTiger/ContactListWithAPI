import { Context } from "./Context";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Modal from './Modal'

function Contacts() {
    const { list, delData, editData } = useContext(Context)

    return (
    <div className="container-fluid">
        <div>
            {/* FORM LINK */}
            <button type="button" className="btn btn-primary">
                <Link style={{color: "white", textDecoration: "none"}} to="/form">
                    Add new contact
                </Link>
            </button> 
        </div>
        {list.map((contact, index) => (
            <div className="card d-flex flex-row p-3 border-1" key={contact.id} >
                <div className="col-3">
                    <img src="https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-16.jpg" alt="judgemental cat" width="150px" height="150px" className="object-fit-cover rounded-circle"/>
                </div>
                <div className="col-6">
                    <div className="card-body">
                        <h2>{contact.name}</h2>
                        <h5>
                            <i className="fa fa-location-arrow me-2"/>
                            {contact.address}
                        </h5>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                    </div>
                </div>
                <div className="col-3">
                    <Link to={`/updateForm/${contact.id}`} style={{ color: "black" }}>
                        <i className="fa fa-pencil m-3" />
                    </Link>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => delData(index)} >
                        {/* <Modal index={index}> */}
                            <i className="fa fa-trash"/> 
                        {/* </Modal> */}
                    </button>{/* Can't remove this or move the onClick, otherwise won't work */}
                </div>
            </div>
        ) )}
    </div>
    );
}

export default Contacts;