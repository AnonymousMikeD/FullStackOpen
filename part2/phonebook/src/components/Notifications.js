import React from "react";

const Notifications = ({message}) => {
    if(message.length===0){
        return null;
    }
    if (message.includes('deleted')){
        return <div className="error">{message}</div>
    }
    if (message.includes('Added')){
        return <div className="success">{message}</div>
    }
    
    
}

export default Notifications;