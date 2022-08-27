import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg"
          alt="squid"
        />
      </div>
      <div className={classes.descriptionBlock}>ava + descripton</div>
    </div>
  );
};

export default ProfileInfo;
