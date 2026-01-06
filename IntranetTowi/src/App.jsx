import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Login from './login/Login'
import Dashboard from './dashboard/Dashboard'

function App() {
  const isAuthenticated = localStorage.getItem('auth') === 'false'
  return (
    <>
    <Routes>
      <Route path='/' element={isAuthenticated ? <Navigate to={'/dashboard'}/> : <Login/>} />
      <Route path='/dashboard' element={isAuthenticated ? <Dashboard/> : <Navigate to="/"/>}/>
    </Routes>
    </>
  )
}

export default App
