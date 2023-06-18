import axios from 'axios';
import  { useEffect, useState } from 'react'
import './follo.css';

export default function Followings({username}:{username:string}) {
    const[following,setFollowing] =useState([]);

    useEffect(()=>{
       axios
       .get(`https://api.github.com/users/${username}/following`)
       .then(function (respo){
           setFollowing(respo.data)
       })
    })
   
     return (
       <div className="">
        <h1 className="heading">{username}'s followings</h1>
       <div className="follo_box ">
           {following.map((e:any) =>(
               <div  className="person_box">
                   <div className="person">
                       <img className="follo_image" src={e.avatar_url} alt="" />
                       <span className="user_name">{e.login}</span>
                   </div>
                   <a href={"/user/" + e.login}>
                       <button className="go_button">go to profile</button>
                   </a>
               </div>
           ))}
       </div>
   </div>
       
       
     )
}
