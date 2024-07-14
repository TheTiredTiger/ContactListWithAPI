import { createContext, useEffect, useState } from "react";
import axios from "axios";
let URL = "https://playground.4geeks.com/contact/agendas/thetiredtiger/contacts"

const Context = createContext(null)

function ContactsContext({ children }) {
    const [ list, setList ] = useState([])
    const [contact, setContact] = useState({
        "name": "", "email": "", "phone": "", "address": ""
    })

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


    useEffect(() => {
        fetchData();
    }, [])

    async function addData() {
        let addCont = await axios.post(URL, {
            "name": contact.name, 
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
        setContact({name: "", phone: "", email: "", address: ""})
    }
        
    async function editData(id) {
        let editCont = await axios.put(`${URL}/${id}`, {
            "name": contact.name, 
            "phone": contact.phone, 
            "email": contact.email,
            "address": contact.address
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        console.log("edit clicked")
        fetchData();
    }

    async function delData(index) {
        try {
            let delCont = await axios.delete(`${URL}/${list[index].id}`);
            console.log("deleted ", list[index].id)
            let newList = list.filter((el) => {
                el.id != list[index].id;
            })
            setList(newList)
        } catch (err) {
            console.error(err);
        }
        fetchData();
    }

    return (
        <Context.Provider value={{ list, setList, contact, setContact, addData, editData, delData }}>
            {children}
        </Context.Provider>
     );
}

export {Context, ContactsContext};