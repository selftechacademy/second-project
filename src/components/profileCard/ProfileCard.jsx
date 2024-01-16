import React from "react";
import PropTypes from "prop-types";
import MyButton from "../myButton/MyButton";
import "./profileCard.style.css";

const ProfileCard = ({ firstName, job, imgSrc, gender }) => {
  const onClickHandler = () => {
    alert(`Hi ${firstName}`);
  };

  return (
    <div className="profile-container">
      <div>
        <img src={imgSrc} width={"100%"} />
        <h5>{firstName.toUpperCase()}</h5>
        <h6>{job}</h6>

        <MyButton
          text="Learn more"
          variant={gender === "man" ? "square" : "rounded"}
          onClickHandler={onClickHandler}
        />
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  job: PropTypes.oneOf(["front end engineer", "doctor"]),
};

export default ProfileCard;
