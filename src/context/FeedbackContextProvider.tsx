import { createContext, useEffect, useMemo, useState } from "react";
import { feedbackitems } from "../lib/types";

type Tprops ={
    filteredItems: feedbackitems[],
    isLoading:boolean,
    error:string,
    selected:string,
    addData: (text:string) => void,
    companyList: string[],
    handleSelectCompany:(text:string) => void

}

export const FeedbackContext = createContext<Tprops | null>(null)

type TProviderprops = {
    children :React.ReactNode
}



export default function FeedbackContextProvider({children}:TProviderprops) {

    const [feedbackData, setFeedbackData] = useState<feedbackitems[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [selected, setSelected] = useState("")

    const addData = async (text:string) =>{

      const newItem:feedbackitems = {
        id: new Date().getHours(),
        text:text,
        company: text.split(" ").find(company => company.includes("#"))!.substring(1),
        daysAgo: 0,
        badgeLetter:text.split(" ").find(company => company.includes("#"))!.substring(1).substring(0, 1).toUpperCase(),
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

    const filteredItems =  useMemo(() => selected ? feedbackData.filter(company => company.company === selected): feedbackData, [selected, feedbackData]);
    const companyList = useMemo(() => feedbackData.map(item => item.company).filter((company,index,array)=>  array.indexOf(company) === index), [feedbackData]);
    const handleSelectCompany = (text:string) => setSelected(text)

    useEffect(()=>{
      const fetchFun = async () => {
          setIsLoading(true)

          try{
            const res = await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks");
            if(!res.ok){
              throw new Error()
            }
            const data = await res.json()
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

  return (
    <FeedbackContext.Provider value ={{
        filteredItems,
        isLoading,
        error,
        selected,
        addData,
        companyList,
        handleSelectCompany

    }}>{children}</FeedbackContext.Provider>
  )
}
