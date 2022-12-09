import {BsMusicNoteList, BsPlusLg} from "react-icons/bs"

import styles from "./NewNoteCard.module.css"

function NewNoteCard({onClick}) {
  const handleClick = () => {
    onClick();
  }


  return (
    <div className={styles.newNote} onClick={handleClick}>
      <BsPlusLg className={styles.plus} />
    </div>
  )
}

export default NewNoteCard;