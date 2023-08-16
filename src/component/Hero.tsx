
import  { useState } from 'react'
import { useNavigate } from "react-router-dom";
import search from "../assets/search.svg";
import './hero.css';


const Hero = () => {
        const[value,setValue]=useState("")
        const goTo=useNavigate();


const handelSubmit=()=>{
    goTo(`/user/${value}`)

}

const handelChange =(e:any)=>{
    e.preventDefault();
    setValue(e.target.value)
}

  return (
   <div className="hero">
    <form onSubmit={handelSubmit}>
        <input type="text"
        onChange={handelChange}
        placeholder='Enter Username Github user' 
        />
        <button type='submit' className='submit'><img className='search-logo' src={search} alt="" /> </button>
    </form>
   </div>
  )
}

export default Hero
