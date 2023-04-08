import { Button } from "@mui/material";
import React from "react";

export default function Input (){
    return(
        <div className="input-class">
            <input type="text" placeholder="Enter a text"/>
            <div className="send">
                <Button sx={{border:"none",padding:"10px",color:"pink"}}>Send</Button>
            </div>
        </div>
    )
}