import { Button } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db ,auth} from "../../Firebase/firebase";

const User = ({user , selectUser, chat , user1}) => {
    const user2 = user?.uid;
    const [data,setData] = useState("");

    useEffect(()=>{
        const id = user1>user2 ? `${user1 + user2}` : `${user2 + user1}`
        const unsub = onSnapshot(doc(db,"lastMsg",id),(doc)=>{
            setData(doc.data());
        });
        return () =>unsub();
    },[]);
    console.log(data);

    return(
        <button 
        className={`user-wrapper ${chat.DisplayName === user.DisplayName && "selected-user"}`} 
        onClick={()=> selectUser(user)}>
            <div className="user-info">
                <div className="user-detail">
                    <h4>{user.DisplayName}</h4>
                    {data?.from !== user1 && data?.unread && (
                        <small className="unread">New</small>
                    )}
                </div>
            </div>
            {data && (
                <p className="truncate">
                    <strong>{data.from === user1 ? "Me:" :null}</strong>
                    {data.text}
                </p>
            )}
        </button>
    )
}

export default User;