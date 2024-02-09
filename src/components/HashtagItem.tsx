

type Tprops = {
    feedback:string,
    handleSelectCompany:(text:string) => void

}

export default function HashtagItem({feedback, handleSelectCompany}:Tprops) {
  return (
    <li>
        <button onClick={()=> handleSelectCompany(feedback)}>#{feedback}</button>
    </li>
  )
}
