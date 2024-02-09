import { useState, useEffect } from "react"
import Container from "./Container"
import Footer from "./Footer"
import HashtagList from "./HashtagList"
import { feedbackitems } from "../lib/types"



function App() {

  const [feedbackData, setFeedbackData] = useState<feedbackitems[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(()=>{
    const fetchFun = async () => {
        setIsLoading(true)

        try{
          const res = await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks");
          if(!res.ok){
            throw new Error()
          }
          const data = await res.json()
          console.log(data.feedbacks)
          setFeedbackData(data.feedbacks)

        }
        catch(error){
          setError("Something went wrong")
          setIsLoading(false)
      }
        setIsLoading(false)

  }
 fetchFun()
}
  , [])

  const addData = async (text:string) =>{

    const newItem:feedbackitems = {
      text:text,
      company: text.split(" ").find(company => company.includes("#"))?.substring(1),
      daysAgo: 0,
      badgeLetter:text.split(" ").find(company => company.includes("#")).substring(1).substring(0, 1).toUpperCase(),
      upvoteCount:0
    }
    setFeedbackData([...feedbackData, newItem])

    await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks", {
      method:"POST",
      body: JSON.stringify(newItem),
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      }
    });
  }

  return (
    <div className="app">
      <Footer/>
      <Container  feedbackData ={feedbackData} isLoading ={isLoading} error={error} addData={addData}/>
      <HashtagList />
    </div>
  )
}

export default App
