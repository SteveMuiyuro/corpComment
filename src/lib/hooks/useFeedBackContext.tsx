import { useContext } from 'react'
import { FeedbackContext } from '../../context/FeedbackContextProvider'


export default function useFeedBackContext() {

  const context = useContext(FeedbackContext)

  if(!context){
    throw new Error("The element is not included in the context provider.")
  }


  return context

  }
