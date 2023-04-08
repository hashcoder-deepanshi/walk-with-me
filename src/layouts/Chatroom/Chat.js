import React, { useEffect, useRef } from "react";
import Moment from "react-moment";

export default function Chat ({msg , user1}){
    const scrollRef = useRef();

    useEffect(() =>{
        scrollRef.current?.scrollIntoView({behavior:"smooth"})
    },[msg])
    return(
        <div className={`chat-wrapper ${msg.from === user1 ? "own" :""}`}
        ref={scrollRef}>
             <p className={msg.from === user1 ? "me":"friend"}>
                {msg.text}
                <br/>
                <small>
                    <Moment fromNow>{msg.createdAt.toDate()}</Moment>
                </small>
             </p>
        </div>
    )
}