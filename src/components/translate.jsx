import React from "react";

const Translate = ({text,language,translatedText,onTranslate}) => {
    return(
        <div>
            <button onClick={onTranslate}>Translate</button>
            <p>{translatedText}</p>
            
        </div>
    );
};

export default Translate;