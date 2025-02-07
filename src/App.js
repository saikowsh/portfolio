import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Common/Header'
import Footer from './Common/Footer'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const[wwe,setwwe]=useState(localStorage.getItem('username'))
  const[wwe1,setwwe1]=useState(localStorage.getItem('password'))
  useEffect(()=>{
    toast.success("welcome to app" +" "+ wwe)
  },[]);


  
  return (
    <div>
      <ToastContainer />
      <center>
        <Header/>
      <h1>hello world</h1>
      <Link to="/">
      <button>go to Settings</button>
      </Link>
      <Footer/>
      </center>

      <h1>{wwe}</h1>
      <h1>{wwe1}</h1>
    </div>
  )
}

export default App

