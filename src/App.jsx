import './App.css'
import { Route,Routes } from 'react-router-dom'
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage'
import EntertinementPage from './Pages/EntertinementPage/EntertinementPage'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<RegistrationPage/>}/>
      <Route path='/entertinement' element={<EntertinementPage/>}/>

    </Routes>
    </>
  )
}

export default App
