import FeedbackForm from "./FeedbackForm";
import Logo from "./Logo";
import PageHeading from "./PageHeading";
import Pattern from "./Pattern";

type Tprops = {
  addData:(text:string) => void
}

export default function Header({addData}:Tprops) {
  return (
    <header>
        <Pattern />
        <Logo />
        <PageHeading />
        <FeedbackForm addData={addData} />

    </header>
  )
}
