
import { useEffect } from "react"
import { feedbackitemstore } from "../stores/feedbackItemstore"
import Container from "./Container"
import Footer from "./Footer"
import HashtagList from "./hashtag/HashtagList"




 export default function App() {

    const fetchItems = feedbackitemstore(state => state.fetchFeedbackItems)

    useEffect(()=>{

      fetchItems()

    }, [fetchItems])



  return (
      <div className="app">
          <Footer/>
          <Container/>
          <HashtagList />

      </div>
    )
  }
