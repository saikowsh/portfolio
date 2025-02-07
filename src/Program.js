import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import App from './App';
import Settings from './Settings';

function Program() {
  return (
    <div>
        <Router>
        <Routes>
        <Route path='/app' element={<App/>}/>
        <Route path='/' element={<Settings/>}/>
        </Routes>
        </Router>
    </div>
  )
}

export default Program