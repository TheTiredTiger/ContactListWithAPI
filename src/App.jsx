import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacts from './components/Contacts'
import Form from './components/Form'
import UpdateForm from './components/Update Form'

function App() {
  
  return (
	<BrowserRouter>
        <div><s>send help</s></div>
        <Routes>
			<Route path="/" element={<Contacts/>} />
			<Route path="/form" element={<Form/>} />
      <Route path="/updateForm/:id" element={<UpdateForm />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
