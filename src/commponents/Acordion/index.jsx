
import css from "./style.module.css"
import { useState } from "react";

const Accordion = ({title, text}) => {

  const [state, setState] = useState(false);

  const handleShow = () => {
    setState(!state)
    console.log(state)
  }
return (
    <div className={css.wrapper}>

      <button onClick={handleShow}
       className={css.accordion}>{title}</button>
      <p className={state ? css.show : css.text}>{text}</p>
    </div>
  )
}

export default Accordion