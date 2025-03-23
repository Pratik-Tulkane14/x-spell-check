import { useState } from "react";
import "./App.css";

function App() {
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const [input, setInput] = useState("");
  const [suggestionText, setSuggestionText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setInput(text);

    const words = text.split(" ");

    let firstCorrection = "";
    for (let word of words) {
      const correctedWord = customDictionary[word.toLowerCase()];
      if (correctedWord && correctedWord !== word.toLowerCase()) {
        firstCorrection = correctedWord;
        break;
      }
    }

    setSuggestionText(firstCorrection);
  };

  return (
    <>
      <h1>Spell Check & Auto-Correction</h1>
      <textarea
        name="inputText"
        id="input-area"
        placeholder="Enter text..."
        value={input}
        onChange={handleChange}
      ></textarea>
      {suggestionText && (
        <p>
          Did you mean:{" "}
          <strong className="suggestion">{suggestionText}?</strong>
        </p>
      )}
    </>
  );
}

export default App;
