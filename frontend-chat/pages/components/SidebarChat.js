import { Avatar, Link } from "@mui/material";
import React, { useEffect, useState, } from "react";
import style from "./SidebarChat.module.css";

function SidebarChat({ addNewChat, id, name, message,viewUserChat }) {
  const [seed, setSeed] = useState("");


  function userProfileCLick(){

    viewUserChat(id)


  }

  //run some code when the component changes
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    // const roomName = prompt("Please enter a name for the chat");

    // if (roomName) {
    //   //do some clever database stuff...
    //   addDoc(collection(db, "rooms"), {
    //     name: roomName,
    //   }).then(()=>{
    //     console.log("added successfully");
    //   }).catch((err)=>{ console.log(err.code)});

    //   // setDoc(doc(db, "rooms"), { name: roomName });
    // }
  };

  return !addNewChat ? (

    <div className={style.sidebarChat} onClick={userProfileCLick}>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className={style.sidebarChat__info}>
        <h2>{id}</h2>
        <p>{message}</p>
      </div>
    </div>


  ) : (
    <div className={style.sidebarChat} onClick={createChat}>
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
