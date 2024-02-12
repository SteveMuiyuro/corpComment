import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";
import { feedbackitemstore } from "../../stores/feedbackItemstore";


export default function FeedbackForm() {

  const  addData = feedbackitemstore(state => state.addData)

  const [inputData, setInputData] = useState("");
  const [validData, setValidData] = useState(false);
  const [invalidData, setInvalidData] = useState(false)


  const charCount = MAX_CHARACTERS - inputData.length;
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    if (newValue.length > MAX_CHARACTERS) return;
    setInputData(newValue);
  };

  const handleInputData = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if(inputData.includes("#") && inputData.length >= 5){
      setValidData(true)
      setTimeout(()=> setValidData(false), 2000)

    } else{
      setInvalidData(true)
      setTimeout(()=> setInvalidData(false), 2000)
      return;
    }
    addData(inputData);
    setInputData("");
  };

  return (
    <form className={`form ${validData ? "form--valid" : ""} ${invalidData ? "form--invalid" : ""}`}>
      <textarea
        id="feedback-textarea"
        placeholder="Enter Text"
        spellCheck={false}
        value={inputData}
        onChange={handleChange}
      />

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button onClick={handleInputData}>Submit</button>
      </div>
    </form>
  );
}
