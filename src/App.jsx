import './App.css'
import { Route, Routes } from 'react-router-dom'
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage'
import EntertinementPage from './Pages/EntertinementPage/EntertinementPage'
import HomePage from './Pages/Home/HomePage'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<RegistrationPage />} />
        <Route path='/entertinement' element={<EntertinementPage />} />
        <Route path='/Home' element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
