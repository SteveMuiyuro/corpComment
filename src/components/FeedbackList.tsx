
import FeedbackItemComponent from "./FeedbackItemComponent";
import Spinner from "./Spinner";
import Error from "./Error";
import { feedbackitems } from "../lib/types";

type Tprops = {
  feedbackData:feedbackitems[],
  isLoading:boolean,
  error:string,

}
export default function FeedbackList({feedbackData, isLoading, error}:Tprops) {


  const feedbackitems = feedbackData.map(feedback => <FeedbackItemComponent key={feedback.id}  feedback={feedback}/>)
  return (
    <>
      {isLoading && <Spinner/> }
      <ol className='feedback-list'>
      {error ? <Error errorMessage={error}/> : feedbackitems}
      </ol>

    </>
  )
}
