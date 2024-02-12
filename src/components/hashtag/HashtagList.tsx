
import useFeedBackContext from "../../lib/hooks/useFeedBackContext"
import HashtagItem from "./HashtagItem"



export default function HashtagList() {

  const {companyList, handleSelectCompany} = useFeedBackContext()

  return (
    <ul className="hashtags">
      {companyList.map(feedback => <HashtagItem feedback={feedback} key={feedback} handleSelectCompany={handleSelectCompany}/>)}

    </ul>
  )
}
