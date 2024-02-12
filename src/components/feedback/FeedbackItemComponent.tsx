import { TriangleUpIcon } from "@radix-ui/react-icons";
import { feedbackitems } from "../../lib/types";
import { useState } from "react";

type feedbackprops = {
  feedback: feedbackitems;
};

export default function FeedbackItemComponent({ feedback }: feedbackprops) {
  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedback.upvoteCount);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUpvoteCount((prev) => ++prev);
    e.currentTarget.disabled = true;
    e.stopPropagation();
  };

  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback  ${open ? "feedback--expand" : ""}`}
    >
      <button onClick={handleClick}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
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
  );
}
