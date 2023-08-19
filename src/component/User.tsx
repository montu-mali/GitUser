import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from './Navbar'
import Notfaund from "./Notfaund";
import Followings from "./Followings";
import { useParams } from "react-router-dom";
import Followers from "./Followers";
import Repos from "./Repos"
import './User.css';
import link from "../assets/link.svg";
import git from "../assets/git.svg";
import location from "../assets/location.svg";
import twiter from "../assets/twiter.svg";


type emptyUserInfo = {
  login?: string,
  id?: number,
  node_id?: "",
  avatar_url?: "",
  gravatar_id?: "",
  url?: "",
  html_url?: "",
  followers_url?: "",
  following_url?: "",
  gists_url?: "",
  starred_url?: "",
  subscriptions_url?: "",
  organizations_url?: "",
  repos_url?: "",
  events_url?: "",
  received_events_url?: "",
  type?: "",
  site_admin?: "",
  name?: "",
  company?: "",
  blog?: "",
  location?: "",
  email?: "",
  hireable?: "",
  bio?: "",
  twitter_username?: "",
  public_repos?: "",
  public_gists?: "",
  followers?: "",
  following?: "",
  created_at?: "",
  updated_at?: "",
};

const User = () => {
  const { username } = useParams();
  const [userInfo, setuserInfo] = useState<emptyUserInfo>({});
  const [status, setStatus] = useState("");
  const [showFollowers, setshowFollowers] = useState(false)
  const [showFollowings, setshowFollowings] = useState(false)
  const [loding, setloding] = useState(true)




  useEffect(() => {
    document.title = `${username}'s Profile | GithubUser`;

    axios
      .get(`https://api.github.com/users/${username}`)
      .then(function (respo) {
        setuserInfo(respo?.data);
        setloding(false);
      })
      .catch(function (error) {
        setStatus(error?.response?.data?.message);
      });




  }, []);

  return (
    <>

      {status === "Not Found" ? (
        <Notfaund />
      ) : (
        <>
          <Navbar />
          <div>
            {loding ? (
              <div>
                <div></div>
              </div>
            ) : (
              <div>
                <div className="userbox ">

                  <div className="container">

                    <div className="img_box">
                      <img className="image" src={userInfo.avatar_url} alt="" />
                    </div>

                    <div className="info_box">
                      <h1 className="nameC"> {userInfo.name} </h1>
                      
                      <p className="company">{userInfo.company}</p>
                      {/* <p className="company">{userInfo.company}</p> */}



                      <p className="About">About : {userInfo.bio == null
                        ? "Nothing"
                        : userInfo.bio}</p>

                      <div className="follow">
                        <span className="follo"  onClick={() => {
                          setshowFollowers(showFollowers ? false : true);
                          setshowFollowings(showFollowings ? false : false)
                        }}>{userInfo.followers} Followers  </span>

                        <span className="follo"  onClick={() => {
                          setshowFollowings(showFollowings ? false : true);
                          setshowFollowers(showFollowers ? false : false)
                        }}>   {userInfo.following} Following
                        </span>
                      </div>

                      <p className="join">Join on : {userInfo.created_at}</p>

                      <div className="user_linkbox">
                        <a className="blog link" target="_blank" href={userInfo.blog}><img className="info-logo" src={link} alt="blog: " /> {userInfo.blog}</a>
                        <a className="git link" target="_blank" href={userInfo.html_url}> <img className="info-logo" src={git} alt="git: " /> {userInfo.login}</a>
                        <span className="loc"> <img className="info-logo" src={location} alt="loc: " /> {userInfo.location}</span>
                        {userInfo.bio == null
                          ? ""
                          : (<span className="twiter linkspan loc"><img className="info-logo" src={twiter} alt="Twi: " />{userInfo.twitter_username}</span>)}
                      </div>


                    </div>

                  </div>
                </div>


                <div className="repo_box ">

                  <Repos username={username as string} />

                </div>

                <div className="follo_main " onClick={() => {
                  setshowFollowers(showFollowers ? false : false);
                  setshowFollowings(showFollowings ? false : false)
                }}>

                  <div className="folloslide">
                    {
                      showFollowers ? <Followers username={username as string} /> : <></>

                    }
                    {
                      showFollowings ? <Followings username={username as string} /> : <></>
                    }
                  </div>
                </div>


              </div>

            )}
          </div>
        </>
      )}

    </>
  );
};

export default User;
// company,bio,created_at,blog
