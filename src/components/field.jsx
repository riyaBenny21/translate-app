import React from "react";

const Field = ({value,onChange}) => {
    return(
        <div>
            <label htmlFor="textInput"><b>Start Typing..</b></label><br/><br/>
            <input 
                type="text"
                id="textInput"
                value={value}
                onChange={onChange}
            />
        </div>
        
    );
};

export default Field;