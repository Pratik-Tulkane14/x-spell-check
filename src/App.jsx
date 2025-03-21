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
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setSuggestionText(firstCorrection || "");
    // setTimeout(() => {
    //   setSuggestionText(firstCorrection || "");
    // }, 0);
  };
  return (
    <>
      <h1>Spell Check & Auto-Correction</h1>
      <textarea
        name="inputText"
        id="input-area"
        placeholder="Enter text..."
        value={input}
        onChange={(e) => handleChange(e)}
      ></textarea>
        {suggestionText && (
      <p>
        Did you mean:
          <strong className="suggestion">{suggestionText}?</strong>
      </p>
        )}
    </>
  );
}

export default App;
