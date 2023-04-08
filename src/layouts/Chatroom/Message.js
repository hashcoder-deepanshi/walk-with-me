import React from "react";

export default function Message ({handleSubmit,text,setText}){
    return(
        <form className="message-form" onSubmit={handleSubmit}>
            <input 
            type={"text"} 
            placeholder="Enter a message"
            value={text}
            onChange={(e)=>setText(e.target.value)}/>
            <button type="submit" className="send-btn">Send</button>
            
        </form>
    )
}