import { Context } from "./Context";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function UpdateForm () {
    const { list, editData, contact, setContact } = useContext(Context)
    const [ update, setUpdate ] = useState({
        name: "", email: "", phone: "", address: ""
    })

    let {id} = useParams()

    const updateContact = list.find((el) => {
        return el.id == parseInt(id);
    })

    useEffect(() => {
        if (updateContact) {
            setUpdate({
                name: updateContact.name,
                email: updateContact.email,
                phone: updateContact.phone,
                address: updateContact.address
            })
        }
    }, [updateContact])

    function handleUpdate(e){
        setUpdate({
            ...update,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(){
        const updatedContact = {
            ...updateContact,
            ...update
        };
        editData(updatedContact.id, updatedContact)
    }

    console.log(updateContact)

    return ( 
        <div className="formdiv">
            <h1>Update contact</h1>
            <div>
                {/* NAME */}
                <div className="mb-3">
                    <label for="exampleInputName1" className="form-label">Full name</label>
                    <input type="text" name="name" defaultValue={update.name} className="form-control" id="exampleInputName1"
                    onChange={handleUpdate} required/>
                </div>

                {/* EMAIL */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" name="email" defaultValue={update.email}className="form-control" id="exampleInputEmail1"
                    onChange={handleUpdate} required/>
                </div>

                {/* PHONE */}
                <div className="mb-3">
                    <label for="exampleInputTel1" className="form-label">Phone</label>
                    <input type="number" name="phone" defaultValue={update.phone}className="form-control" id="exampleInputTel1"
                    onChange={handleUpdate} required/>
                </div>

                {/* ADDRESS */}
                <div className="mb-3">
                    <label for="exampleInputAdress1" className="form-label">Address</label>
                    <input type="text" className="form-control" 
                    name="address" defaultValue={update.address} id="exampleInputAdress1"
                    onChange={handleUpdate} required/>
                </div>

                {/* BUTTONS */}
                <div>
                    <button type="submit" className="btn btn-primary mb-3"
                    onClick={handleSubmit}>Update</button>
                </div>

                <span><Link to="/">Go back to Contacts</Link></span>
            </div>    
        </div>
     );
}

export default UpdateForm;