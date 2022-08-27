import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
        alt="Автарка"
      />
      {props.message}
      <div>
        <span>{props.likesCount}</span>
        
        
      </div>
      
      
    </div>
  );
};

export default Post;
