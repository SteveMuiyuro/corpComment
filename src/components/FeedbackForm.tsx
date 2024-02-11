import { useState } from "react"
import {MAX_CHARACTERS} from "../lib/constants"

type Tprops = {
  addData:(text:string) => void
}

export default function FeedbackForm({addData}:Tprops) {
  const [inputData, setInputData] = useState("")

  const charCount = MAX_CHARACTERS -  inputData.length
  const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>)=>{
    const newValue = event.target.value;
    if(newValue.length > MAX_CHARACTERS)  return;
    setInputData(newValue); }

    const handleInputData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
      addData(inputData)
      setInputData("")
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
        <button onClick={handleInputData}
        >Submit</button>
      </div>
      </form>
  )
}
