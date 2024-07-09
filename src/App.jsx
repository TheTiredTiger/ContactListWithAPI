import { useContext } from 'react'
import { Context } from './components/Context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacts from './components/Contacts'
import Form from './components/Form'

function App() {
	let { list, setList } = useContext(Context)




  //we can then use "createContact" for a button for instance

	/* 
	useEffect(() =>{
		AddContact(contact)
	}, []) */

	/* const handleChange = (e) => {
		const {name, value} = e.target;
		setContact({...contact, [name]: value})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		AddContact(contact)
	} */

  
  return (
	<BrowserRouter>
        <div><s>send help</s></div>
        <Routes>
			<Route path="/" element={<Contacts/>} />
			<Route path="/form" element={<Form/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
