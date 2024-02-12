
import { feedbackitemstore } from "../../stores/feedbackItemstore"
import HashtagItem from "./HashtagItem"



export default function HashtagList() {

const companyList = feedbackitemstore(state => state.getCompanyList())
const handleSelectCompany = feedbackitemstore(state => state.selectCompany)

  return (
    <ul className="hashtags">
      {companyList.map(feedback => <HashtagItem feedback={feedback} key={feedback} handleSelectCompany={handleSelectCompany}/>)}

    </ul>
  )
}
