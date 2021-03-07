import React from "react";
import Moment from "react-moment";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./Profile.css";

const Profile = (props) => {
  return (
    <React.Fragment>
      <div className="profile">
        <div className="profile-picture">
          <img
            src={props.image}
            className="profile-picture-image"
            alt="github profile"
          />
        </div>
        <div className="profile-name mt-3">{props.name}</div>
        <div className="profile-login mt-1">
          <a href={props.url}>@{props.login}</a>
        </div>
        <div className="profile-joined mt-2">
          <i className="fas fa-calendar-week" /> Joined at{" "}
          <Moment format="LL">{props.date}</Moment>
        </div>
      </div>
      <div className="row w-50 mt-5">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <ProfileCard name='Followers' number={props.followers}/>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <ProfileCard name='Following' number={props.following}/>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <ProfileCard name='Repositories' number={props.repos}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
