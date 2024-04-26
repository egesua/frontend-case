import Text from "./components/Text";
import { useState } from "react";
import "./App.css";

function App() {

  const [selectedText, setSelectedText] = useState("");

  const handleMouseUp = () => {
    console.log(`Selected text:${window.getSelection().toString()}`);
}


  const texts = [
    "Devs Just Want To Have Some Fun by Cyndi Lauper",
    'I come home in the morning light My mother says, "When you gonna live your life right ??"Oh mother dear were not the fortunate ones and devs, they wanna have fun Oh devs just want to have fun',
    'The phone rings in the middle of the night My father yells "What you gonna do with your life" ?',
    "Oh daddy dear, you know you're still number one But girls devs, they wanna have fun Oh devs just to want to have",
    "That's all they really want Some fun When the working day is gone Oh devs, they wanna have fun Oh devs just wanna have fun (devs, they wanna, wanna have fun, devs wanna have)",
  ];

  return (
    <div onMouseUp={handleMouseUp} className="App">
      <h1 className="main-title">Hi I'm Tiptap</h1>
      <div className="buttons-container">
        Buttons
      </div>
      <div className="text-editor-container">
      {texts.map((text, index) => (
        <Text text={text} key={index}/>
      ))}
      </div>
    </div>
  );
}

export default App;
