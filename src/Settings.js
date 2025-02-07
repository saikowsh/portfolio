import React, { useState } from 'react'
import './Settings.scss'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import Footer from './Common/Footer';
import Header from './Common/Header';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import img1 from './images/download.jpeg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "./images/download (2).jpeg"
import img3 from "./images/download (3).jpeg"
import img4 from "./images/download (4).jpeg"
import { ToastContainer, toast } from 'react-toastify';
import { FaArrowAltCircleRight } from "react-icons/fa";






function  Settings() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite:1,
      autoplay:false,
      autoplaySpeed:1000
    
    };

    

    const[data,setData]=useState(0)
    console.log(data);

    const[name,setname]=useState(100)
    console.log(name);

    const increment = () =>{
      setname(name+1)
    }

    const decrement = ()=>{
      setname(name-1)
    }

    const multi = ()=>{
      setname(name*4)
    }

    const [input1,setinput1] =useState('');
    const [input2,setinput2] =useState('');

    const handledata=()=>{
      
      if (input1===""){
        toast.error("please enter your username")
      }
      else if (input2===""){
        toast.error("please enter your password")
      }
      else if (input2.length<=7){
        toast.error("password must be in 7 letters")
      }
      else{
        console.log(input1,input2)
        toast.success("succesfully data save")

        localStorage.setItem("username,",input1)
        localStorage.setItem("password",input2)
        window.location.href='/app'
      }
    }
    const [show,setshow] = useState(true)
        
      const showdata = () =>{
        setshow(!show)
      } 
  return (
    
    <div className='set'>

     <ToastContainer />

      <Header/>
      
      <FaArrowAltCircleRight className='arrow' onClick={showdata}/>
     {show?
           <div className='navbar'>    
           <label>home</label>
           <label>about</label>
           <label>add cart</label>
           <label>product</label>
           <label>contact</label>
         </div>
         :null }

   
   <h1>{name}</h1>

   <button onClick={increment}>add</button>
   <button onClick={decrement}>sub</button>
   <button onClick={multi}>multi</button>


      <Slider {...settings}>
      <div>
        <img src={img1}/>
      </div>
      <div>
        <img src={img2}/>
      </div>
      <div>
        <img src={img3}></img>
      </div>
      <div>
        <img src={img4}></img>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>

    <img src={img1}/>

    <label>username</label>
    <input type='text'value={input1}onChange={(e)=>setinput1(e.target.value)}></input>
    <label>password</label>
    <input type='password'value={input2} onChange={(e)=>setinput2(e.target.value)}></input><br></br>
    <button onClick={handledata}className='handle button'>submit</button>

      
      
        

        <Link to="/app">
        <button className='appbutton'>GO TO APP</button>
        </Link>

        

        <Footer/>
        
        
        

      </div>
    
  )
}


export default  Settings
