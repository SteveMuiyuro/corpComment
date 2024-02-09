import { TriangleUpIcon } from "@radix-ui/react-icons";
import { feedbackitems } from "../lib/types";


type feedbackprops = {
    feedback:feedbackitems
}


export default function FeedbackItemComponent({feedback}:feedbackprops) {

  return (
        <li className="feedback">
                <button>
                <TriangleUpIcon/>
                <span>{feedback.upvoteCount}</span>
                </button>
                <div>
                <p>{feedback.badgeLetter}</p>
                </div>
                <div>
                <p>{feedback.company}</p>
                <p>{feedback.text}</p>
                </div>
                <p>{feedback.daysAgo}</p>
            </li>
  )
  }
