import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import React, { useEffect, useState } from "react";
import SidebarChat from "./SidebarChat";
import style from "./Sidebar.module.css";
import { getCookie } from "cookies-next";
import AddIcon from '@mui/icons-material/Add';

function Sidebar({chats,viewUserChat,checkClicked}) {
  const [rooms, setRooms] = useState([]);
  const [pubKey,setPubKey] = useState("")
  console.log(typeof chats)

  useEffect(()=>{

    let key = getCookie("public_key")
    setPubKey(key)
    

  },[])
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar__header}>
        <Avatar src={""}/>
        <div style={{fontSize:'15px'}}>{pubKey}</div>
        <div className={style.sidebar__headerRight}>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <AddIcon onClick={()=>{
              // console.log("clicked");
              checkClicked()
            }} />
          </IconButton>
        </div>
      </div>

      <div className={style.sidebar__search}>
        <div className={style.sidebar__searchContainer}>
          <SearchIcon />
          <input placeholder='Search or start a new chat' type='text' />
        </div>
      </div>

      <div className={style.sidebar__chats}>
     
        {chats.map((chat,index) => (
          //console.log(chat)
          <SidebarChat viewUserChat={viewUserChat} message={chat.data.at(-1).cipher} id={chat.from} />
          
        ))}
   




      </div>
    </div>
  );
}

export default Sidebar;
