import { Context } from "./Context";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

function UpdateForm () {
    const { list, editData, contact, setContact } = useContext(Context)

    let {id} = useParams()

    const updateContact = list.find((el) => {
        console.log(el.id == id, el.id, id)
        return el.id == parseInt(id);
    })

    console.log(updateContact)

    return ( 
        <div className="formdiv">
            <h1>Update contact</h1>
            <form>
                {/* NAME */}
                <div className="mb-3">
                    <label for="exampleInputName1" className="form-label">Full name</label>
                    <input type="text" name="name" defaultValue={updateContact.name} className="form-control" id="exampleInputName1"
                    onChange={(e) => setContact({
                        ...contact,
                        name: e.target.value
                    })} required/>
                </div>

                {/* EMAIL */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" name="email" defaultValue={updateContact.email}className="form-control" id="exampleInputEmail1"
                    onChange={(e) => setContact({
                        ...contact,
                        email: e.target.value
                    })} required/>
                </div>

                {/* PHONE */}
                <div className="mb-3">
                    <label for="exampleInputTel1" className="form-label">Phone</label>
                    <input type="number" name="phone" defaultValue={updateContact.phone}className="form-control" id="exampleInputTel1"
                    onChange={(e) => setContact({
                        ...contact,
                        phone: e.target.value
                    })} required/>
                </div>

                {/* ADDRESS */}
                <div className="mb-3">
                    <label for="exampleInputAdress1" className="form-label">Address</label>
                    <input type="text" className="form-control" 
                    name="address" defaultValue={updateContact.address} id="exampleInputAdress1"
                    onChange={(e) => setContact({
                        ...contact,
                        address: e.target.value
                    })} required/>
                </div>

                {/* BUTTONS */}
                <div>
                    <button type="submit" className="btn btn-primary mb-3"
                    onClick={() => editData(updateContact.id)}>Update</button>
                </div>

                <span><Link to="/">Cancel</Link></span>
            </form>    
        </div>
     );
}

export default UpdateForm;