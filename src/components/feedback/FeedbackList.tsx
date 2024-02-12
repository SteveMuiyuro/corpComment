import FeedbackItemComponent from "./FeedbackItemComponent";
import Spinner from "../Spinner";
import Error from "../Error";
import { feedbackitemstore } from "../../stores/feedbackItemstore";

export default function FeedbackList() {
  const filteredItems = feedbackitemstore((state) => state.getfilteredItem());
  const error = feedbackitemstore((state) => state.error);
  const isLoading = feedbackitemstore((state) => state.isLoading);

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
