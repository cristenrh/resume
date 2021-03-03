import React from "react";

const Scroll = (props) => {
    return (
        <div className="scroll" style = {{overflowY: 'scroll', border: 'none', height: '550px'}}>
            {props.children}
        </div> 
    )
    
}

export default Scroll;