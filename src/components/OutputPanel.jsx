import React, {useState} from "react";

const OutputPanel = ({output, setOutput}) => {
    return(
        <div>
            {output 
                ? <div>{output}</div>
                : <p>Yor email is generating...</p>}
        </div>
    )
}

export default OutputPanel;