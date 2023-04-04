import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MicIcon from "@mui/icons-material/Mic";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Chat.module.css";


function Chat({ send, id, chats }) {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));

    let chat = chats.filter((value, index) => {
      if (value.from == id) {
        return value
      }
    })

    let chatMod = chat[0].data;
    chatMod = chatMod.map((value, index) => {
      return {
        message: value.cipher,
        recieve: value.receive
      }
    })

    console.log("Inside chat")
    console.log(chatMod)
    setMessages(chatMod)



  }, [id,chats]);

  const sendmessage = (e) => {
    e.preventDefault();

    send(id,input)
    setInput("")
 
  };

  return (
    <div className={style.chat}>
      <div className={style.chat__header}>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className={style.chat__headerinfo}>
          <h3>{roomName}</h3>
          <p>Last seen at ...</p>
        </div>
        <div className={style.chat__headerRight}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className={style.chat__body}>
        {messages.map((message) => (
          <p className={`chat__message ${true && "chat__reciever"}`}>
            {message.recieve && <div style={{display:'inline-block', right:0, textAlign: 'left', padding:10, backgroundColor:'white', margin:5, borderRadius:10 }}>{message.message}</div>}
            {!message.recieve && <div style={{textAlign:'right'}}><div style={{ display:'inline-block', textAlign: 'right',padding:10, backgroundColor:'white', margin:5, borderRadius:10 }}>{message.message}</div></div>}
          </p>
        ))}
      </div>

      <div className={style.chat__footer}>
        <InsertEmoticonIcon />

        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='Type a message'
          />
          <button type='submit' onClick={sendmessage}>
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
