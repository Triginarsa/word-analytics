import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [warningText, setWarningText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newText = e.target.value;

    //basic validation
    if (newText.includes("<script>")) {
      setWarningText("No script tags allowed!!");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No @ allowed!!");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        placeholder="Enter text here..."
        spellCheck="false"
        value={text}
        onChange={handleChange}
      />
      {warningText && <Warning warningText={warningText} />}
    </div>
  );
}
