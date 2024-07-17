import { Context } from "./Context";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Modal from './Modal'

function Contacts() {
    const { list, delData } = useContext(Context)

    return (
    <div className="container-fluid">
        <div style={{textAlign: "right", marginBottom: "2rem"}}>
            {/* FORM LINK */}
            <button type="button" className="btn btn-primary">
                <Link style={{color: "white", textDecoration: "none"}} to="/form">
                    Add new contact
                </Link>
            </button> 
        </div>
        {list.map((contact, index) => (
            <div className="card d-flex flex-row p-3 border-1 my-5" key={contact.id} >
                <div className="col-3" style={{textAlign: "center", verticalAlign: "middle", paddingTop: "1rem"}} >
                    <img src="https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-16.jpg" alt="judgemental cat" width="150px" height="150px" className="object-fit-cover rounded-circle"/>
                </div>
                <div className="col-6">
                    <div className="card-body">
                        <h3>{contact.name}</h3>
                        <p>
                        <i class="fa-solid fa-location-dot me-2" />
                            {contact.address}
                        </p>
                        <p><i class="fa-solid fa-phone me-2" />
                        {contact.phone}</p>
                        <p><i class="fa-solid fa-envelope me-2"/>
                        {contact.email}</p>
                    </div>
                </div>
                <div className="col-3" style={{textAlign: "right", paddingRight: "2rem", fontSize: "18px"}}>
                    <Link to={`/updateForm/${contact.id}`} style={{ color: "black" }}>
                        <i className="fa fa-pencil m-3" />
                    </Link>
                    <button classname="deleteButton" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" 
                    style={{border: "none", background: "none"}}
                    onClick={() => delData(index)} >
                       {/*  <Modal index={index}> */}
                            <i className="fa fa-trash"/> 
                        {/* </Modal> */}
                    </button>
                </div>
            </div>            
        ) )}
    </div>

    );
}

export default Contacts;