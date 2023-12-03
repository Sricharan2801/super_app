import './App.css'
import { Route, Routes } from 'react-router-dom'
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage'
import EntertinementPage from './Pages/EntertinementPage/EntertinementPage'
import HomePage from './Pages/Home/HomePage'
import BrowseEntertinement from './Pages/BrowseEntertinementPage/BrowseEntertinement'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<RegistrationPage />} />
        <Route path='/entertinement' element={<EntertinementPage />} />
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/browse' element={<BrowseEntertinement/>}/>
      </Routes>
    </>
  )
}

export default App
