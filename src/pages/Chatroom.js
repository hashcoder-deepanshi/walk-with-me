import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { addDoc, collection, onSnapshot, query, Timestamp, where,orderBy, doc, setDoc, updateDoc ,getDoc} from "firebase/firestore";
import Chat from "../layouts/Chatroom/Chat";
import User from "../layouts/Chatroom/User";
import Message from "../layouts/Chatroom/Message";
import { db ,auth} from "../Firebase/firebase";
import './Chatroom.css';

export default function Chatroom(){
    const [users,setUsers] = useState([])
    const [chat,setChat] = useState("");
    const [text,setText] = useState("");
    const [msgs,setMsgs] = useState("")

    const user1= auth.currentUser.uid
    useEffect(()=>{
      const usersRef = collection(db,"users")
      const q = query(usersRef,where("uid","not-in",[user1]));

      const unsub = onSnapshot(q,(querySnapshot) =>{
        const users = [];
        querySnapshot.forEach((doc)=>{
          users.push(doc.data());
        });
        setUsers(users);
      });
      return ()=>unsub();
    },[]);

    const selectUser = async (user) =>{
      setChat(user);
      console.log(user);
      const user2 = user.uid
      const id = user1>user2 ? `${user1 + user2}` : `${user2 + user1}`

      const msgRef = collection(db,"messages",id,"chat")
      const q = query(msgRef,orderBy("createdAt","asc"))

      onSnapshot(q,querySnapshot =>{
        const msgs = []
        querySnapshot.forEach(doc =>{
          msgs.push(doc.data())
        })
        setMsgs(msgs)
      });

      const docSnap =await getDoc(doc(db,"lastMsg",id));
      if(docSnap.data().from !== user1){
        await updateDoc(doc(db,"lastMsg",id),{unread:false});
      }
    };

    console.log(msgs);
    
    const handleSubmit = async e =>{
      e.preventDefault()

      const user2 = chat.uid;
      const id = user1>user2 ? `${user1 + user2}` : `${user2 + user1}`
      await addDoc(collection(db,"messages",id,"chat"),{
        text,
        from:user1,
        to:user2,
        createdAt:Timestamp.fromDate(new Date())
      })

      await setDoc(doc(db,"lastMsg",id),{
        text,
        from:user1,
        to:user2,
        createdAt:Timestamp.fromDate(new Date()),
        unread:true
      })
      setText("");
    }
    return(
        <div className="home-container">
          <div className="users-container">
            {users.map(user => (
            <User 
            key={user.uid} 
            user={user} 
            selectUser={selectUser} 
            user1={user1} 
            chat={chat}/>
            ))} 
          </div>
          <div className="messages-container">
            {chat?
            <>
            <div className="messages-user">
              <h3>{chat.DisplayName}</h3>
            </div>
            <div className="messages">
              {msgs.length?
              msgs.map((msg,i)=>(
              <Chat key={i} msg={msg} user1={user1}/>
              ))
            :null}
            </div>
            <Message
            handleSubmit={handleSubmit}
            text={text}
            setText={setText}/>
            </>
            :(
            <Typography variant="h4" align="center">Select a user to start a conversation</Typography>
            )}
          </div>
          
        </div>
    )
}