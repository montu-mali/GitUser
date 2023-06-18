import axios from "axios";
import { useEffect, useState } from "react";
import './follo.css';


export default function Followers({username}:{username:string}) {
    const [follower, setFollower] = useState([]);
    
  
    useEffect(() => {
      axios
        .get(`https://api.github.com/users/${username}/followers`)
        .then(function (respo) {
          setFollower(respo.data);
        });
    });
  
    return (
      <div className="">
        <h1 className="heading">{username}'s followers</h1>
        <div className="follo_box">
          {follower.map((e:any) => (
            <div className="person_box">
              <div className="person">
                <img className="follo_image"  src={e.avatar_url} alt="" />
                <span className="user_name">{e.login}</span>
              </div>
              <a href={'/user/' + e.login}>
                <button className="go_button">Go To Profile</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    )
}
