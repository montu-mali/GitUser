// import React from 'react'
import { useNavigate } from "react-router-dom";
import  './NotFound.css'


const Notfaund = () => {
   const navigate =useNavigate()

  return (

    <div className="notFound">
        <div className="er">
            <span className="not_fou">User  Not Found</span>
        </div>
        <button className="btn"
         onClick={()=>{
          navigate(-1);
        }} 
        >
            Go Back
            </button>
    </div>
  );
};

export default Notfaund