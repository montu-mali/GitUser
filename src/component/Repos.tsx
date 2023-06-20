import axios from 'axios';
import { useEffect, useState } from "react";
import './repos.css';
import file from "../assets/file.svg";
import star from "../assets/star.svg";
import fork from "../assets/fork.svg";
import goto from "../assets/goto.svg";
export default function Repos({ username }: { username: string }) {

  // const[repos,setRepos]=useState()
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(function (respo) {
        setRepos(respo.data);
      });
  }, []);


  return (

    <div className="reposbox">
      <div className='heds'> <h1 className='hed'>Repositories</h1></div>
      <div className="repose">

        {repos.length == 0 ?
          (<div className="norepos">
            <p className='noreposP'>{username} have 0 repositories</p>
          </div>) : (
            <div className="repos">
              {

                repos.map((e: any) => (

                  <div className="repos_single">
                    <img className='file-logo' src={file} alt="FILE" />

                    <div className="">
                      <h1 className='name'>{e.name}</h1>
                      <p className='description'>{e.description}</p>
                      <span className='creat'>Created on : {e.created_at}</span>
                    </div>
                    <div className="info">
                      <span className='span'><img className='info-logo' src={star} alt="" /> {e.stargazers_count}</span>
                      {/* <span className='span'> {e.watchers_count}</span> */}
                      <span className='span'><img className='info-logo' src={fork} alt="" />  {e.forks_count}</span>
                      <a className='visit' target='_blank' href={e.html_url}><img className='info-logo' src={goto} alt="" /> Visit</a>
                    </div>

                  </div>
                ))
              }
            </div>
          )
        }


      </div>
    </div>
  )
}
