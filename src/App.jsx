import React, {useState} from "react";
import InputPanel from "./components/InputPanel";
import OutputPanel from "./components/OutputPanel";

function App() {

  //loacal states
  const [context, setContext] = useState("");
  const [recipient, setRecipient] = useState("");
  const [tone, setTone] = useState("");
  const [output, setOutput] = useState(""); 


  //handler functions
  const handlGenerateEmail = () => {
    console.log("generating email");
    console.log("Recipient ", recipient);
    console.log("Context ", context);
    console.log("Tone ", tone);

    setOutput(`Generated placeholder email with ${recipient} ${context} ${tone}`);
  }

  return (
    <div className="flex flex-col justify-center items-center m-24">
      <header className="text-justify p-3 text-7xl text-black">AI Email Generator</header>
      <div className="flex justify-evenly items-center p-4">
          <InputPanel
            contextText = {context}
            setContextText = {setContext}
            recipient = {recipient}
            setRecipient = {setRecipient}
            tone = {tone}
            setTone = {setTone}
            onGenerate = {handlGenerateEmail}
          />
          <OutputPanel output = {output} setOutput = {setOutput} />
      </div>
    </div>
  )
}

export default App
