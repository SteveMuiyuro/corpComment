import { useState } from "react"
import {MAX_CHARACTERS} from "../lib/constants"


export default function FeedbackForm() {
  const [inputData, setInputData] = useState("")

  const charCount = MAX_CHARACTERS -  inputData.length
  const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>)=>{
    const newValue = event.target.value;
    if(newValue.length > MAX_CHARACTERS)  return;
    setInputData(newValue);
  }


  return (
    <form className="form">
     <textarea
      id="feedback-textarea"
      placeholder="Enter Text"
      spellCheck={false}
      value={inputData}
      onChange={handleChange}/>

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button

        >Submit</button>
      </div>
      </form>
  )
}
