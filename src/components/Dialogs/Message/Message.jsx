import React from "react";
import classes from "./../Dialogs.module.css";

const Message = (props) => {
  let newMsg = React.createRef();

  let addMsg = () => {
    let msg = newMsg.current.value;
    alert(msg);
  };

  return (
    <div>
      <div className={classes.message}>{props.message}</div>

      <textarea ref={newMsg}></textarea>
      <button onClick={addMsg}>Message</button>
    </div>
  );
};

export default Message;
