import { feedbackitems } from "../lib/types";
import FeedbackList from "./FeedbackList";
import Header from "./Header";

type Tprops = {
  feedbackData:feedbackitems[],
  isLoading:boolean,
  error:string,
  addData:(text:string) => void
}

export default function Container({feedbackData, isLoading,addData, error}:Tprops) {
  return (
    <main className="container">
        <Header addData={addData}/>
        <FeedbackList feedbackData={feedbackData} isLoading={isLoading} error={error} />
    </main>
  )
}
