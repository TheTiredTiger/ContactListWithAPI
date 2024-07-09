import { createContext, useEffect, useState } from "react";
import axios from "axios";
let URL = "https://playground.4geeks.com/contact/agendas/thetiredtiger/contacts"

const Context = createContext(null)

function ContactsContext({children}) {
    const [ list, setList ] = useState([])
    const [contact, setContact] = useState({
        "fullName": "", "email": "", "phone": "", "address": ""
      }) // we can do it empty instead and put "contact" as a dependency inside the useEffect

    
    useEffect(() => {
        async function fetchData() {
            try {
                let response = await axios.get(URL)
                let contacts = response.data.contacts
                console.log(contacts)
                setList(contacts)
            } 
            
            catch (err) {
                console.error(err);
            }        
        }
        fetchData();
    }, [])  // we can put "contact" here if(?) it's empty

    async function addData() {
        let addCont = await axios.post(URL, {
            "name": contact.fullName, 
            "phone": contact.phone, 
            "email": contact.email,
            "address": contact.address
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        fetchData();
        }
        
    async function editData(id) {
        let editCont = await axios.put(`${URL}/${id}`, {
            "name": contact.fullName, 
            "phone": contact.phone, 
            "email": contact.email,
            "address": contact.address
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        fetchData();
        setContact({name: "", phone: "", email: "", address: ""});
    }

    async function delData(index) {
        let delCont = await axios.delete(`${URL}/${list[index].id}`);
        fetchData()
    } // isn't it enough to do ${id}?

    return (
        <Context.Provider value={{ list, setList, contact, setContact, addData, editData, delData }}>
            {children}
        </Context.Provider>
     );
}

export {Context, ContactsContext};