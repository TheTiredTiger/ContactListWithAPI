import { Context } from "./Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Form () {
    const { addData, contact, setContact } = useContext(Context)
    
    return ( 
        <div className="formdiv">
            <h1>Add a new contact</h1>
            <div>
                {/* NAME */}
                <div className="mb-3">
                    <label for="exampleInputName1" className="form-label">Full name</label>
                    <input type="text" name="name"
                    value={contact.name}
                    className="form-control" id="exampleInputName1"
                    placeholder="Full name"
                    onChange={(e) => setContact({
                        ...contact,
                        name: e.target.value
                    })} required/>
                </div>

                {/* EMAIL */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" name="email"
                    value={contact.email}
                    className="form-control" id="exampleInputEmail1"
                    placeholder="Email"
                    onChange={(e) => setContact({
                        ...contact,
                        email: e.target.value
                    })} required/>
                </div>

                {/* PHONE */}
                <div className="mb-3">
                    <label for="exampleInputTel1" className="form-label">Phone</label>
                    <input type="number" name="phone" 
                    value={contact.phone}
                    className="form-control" id="exampleInputTel1"
                    placeholder="Phone"
                    onChange={(e) => setContact({
                        ...contact,
                        phone: e.target.value
                    })} required/>
                </div>

                {/* ADDRESS */}
                <div className="mb-3">
                    <label for="exampleInputAdress1" className="form-label">Address</label>
                    <input type="text" className="form-control" 
                    name="address" value={contact.address} id="exampleInputAdress1"
                    placeholder="Address"
                    onChange={(e) => setContact({
                        ...contact,
                        address: e.target.value
                    })} required/>
                </div>

                {/* BUTTONS */}
                <div>
                    <button type="submit" className="btn btn-primary mb-3"
                    onClick={() => addData()}>Submit</button>
                </div>

                <span><Link to="/">Go back to Contacts</Link></span>
            </div>    
        </div>
     );
}

export default Form;