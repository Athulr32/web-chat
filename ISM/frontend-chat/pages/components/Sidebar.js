import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import React, { useEffect, useState } from "react";
import SidebarChat from "./SidebarChat";
import style from "./Sidebar.module.css";


function Sidebar() {
  const [rooms, setRooms] = useState([]);



//   useEffect(() => {
//     const unsubscribe=onSnapshot(query(collection(db, "rooms")), (snapshot) => {
//       setRooms(
//         snapshot.docs.map((doc) => ({
//           id: doc.id,
//           data: doc.data(),
//         }))
//       );
//     });

//     return ()=>{
//       unsubscribe();
//     }
//   }, []);
//   rooms.map(room=> {
//     console.log(room.data);
//   })
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar__header}>
        <Avatar src={""}/>
        <div className={style.sidebar__headerRight}>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
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
        <SidebarChat addNewChat />
        {/* {rooms.map((room) => (
          <SidebarChat name={room.data.name} id={room.id} key={room.id} />
        ))} */}
        <SidebarChat name={"yo"} id={"12345"} key={"457654"}/>
        <SidebarChat name={"yo"} id={"12345"} key={"457654"}/>
        <SidebarChat name={"yo"} id={"12345"} key={"457654"}/>
        <SidebarChat name={"yo"} id={"12345"} key={"457654"}/>


      </div>
    </div>
  );
}

export default Sidebar;
