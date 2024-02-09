
import HashtagItem from "./HashtagItem"

type Tprops = {
  feedbackData:string[],
  handleSelectCompany:(text:string) => void
}

export default function HashtagList({feedbackData, handleSelectCompany}:Tprops) {


  return (
    <ul className="hashtags">
      {feedbackData.map(feedback => <HashtagItem feedback={feedback} key={feedback} handleSelectCompany={handleSelectCompany}/>)}

    </ul>
  )
}
