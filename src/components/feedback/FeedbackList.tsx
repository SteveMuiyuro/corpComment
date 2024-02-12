import FeedbackItemComponent from "./FeedbackItemComponent";
import Spinner from "../Spinner";
import Error from "../Error";

import useFeedBackContext from "../../lib/hooks/useFeedBackContext";


export default function FeedbackList() {

  const {filteredItems, isLoading, error} = useFeedBackContext();
  
  const feedbackitems = filteredItems.map((feedback) => (
    <FeedbackItemComponent key={feedback.id} feedback={feedback} />
  ));
  return (
    <>
      {isLoading && <Spinner />}
      <ol className="feedback-list">
        {error ? <Error errorMessage={error} /> : feedbackitems}
      </ol>
    </>
  );
}
