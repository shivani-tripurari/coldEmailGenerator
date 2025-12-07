import React, { useState } from "react";
import {TONES} from "../utils/constants.js"
const InputPanel = ({contextText, setContextText, recipient, setRecipient, tone, setTone, onGenerate}) => {

    //handler functions
    const handleRecipient = (e) => {
        setRecipient(e.target.value);
    }

    const handleContextText = (e) => {
        setContextText(e.target.value);
    }

    const handleToneClick = (item) => {
        // console.log("item is " , item);
        setTone(item);
    }
    
    const handleReset = () => {
        setRecipient("");
        setContextText("");
        setTone("");
    }

    return(
        <div className="p-3 flex flex-col justify-start items-start">
            <label className="font-bold text-lg">Recipient : </label>
            <input
                type="text"
                placeholder="Enter name or designation"
                className="border rounded-md p-3"
                value={recipient}
                onChange={(e)=>handleRecipient(e)}
            />
            <label className="font-bold text-lg">Explain the Context : </label>
            <input
            type="text-area"
                placeholder="Explain the context"
                className="border rounded-md p-3"
                value={contextText}
                onChange={(e)=>handleContextText(e)}
            />
            <label className="font-bold text-lg">Select the tone : </label>
            <div className="flex justify-start items-start">
                {TONES.map((item, idx)=>{
                return(
                    <button 
                        className={`p-3 rounded-md transition 
                            ${tone === item 
                            ? "bg-sky-300 text-white font-bold" 
                            : "border"}
                            `}
                        key={idx}
                        onClick={()=>handleToneClick(item)}
                    >
                            {item}
                    </button>
                )
            })}
            </div>
            <div className="flex justify-between items-center">
                <button className="p-3 rounded-md bg-sky-400 text-white"
                    onClick={()=>onGenerate()}
                >Generate</button>
                <button className="p-3 border"
                    onClick={()=>handleReset()}
                >Reset</button>
            </div>
        </div>
    )
}

export default InputPanel;