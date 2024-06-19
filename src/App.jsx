import {Routes, Route} from "react-router-dom"
import About from './components/About.jsx'
import Contacts from './components/Contacts.jsx'
import Default from './components/Default.jsx'
import Navigation from './components/Navigation.jsx'
import TheError from "./components/TheError.jsx"

function App() {

  return (
    <>
        hello world
        <Navigation/>
        <Routes>
          <Route path="/" element={<Default/>}/>
          <Route path="*" element={<TheError/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>

        
    </>
  )
}

export default App
