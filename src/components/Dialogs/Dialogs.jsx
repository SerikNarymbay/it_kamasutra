import React from "react";

import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem.jsx/Dialogitem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div>{dialogsElements}</div>

      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
