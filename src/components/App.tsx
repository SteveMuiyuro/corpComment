
import Container from "./Container"
import Footer from "./Footer"
import HashtagList from "./hashtag/HashtagList"
import FeedbackContextProvider from "../context/FeedbackContextProvider"



function App() {


  return (
    <div className="app">
      <Footer/>
      <FeedbackContextProvider>
        <Container/>
        <HashtagList />
      </FeedbackContextProvider>
    </div>
  )
}

export default App
