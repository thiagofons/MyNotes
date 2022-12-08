import {BsPlusLg} from "react-icons/bs"

import styles from "./NewNoteCard.module.css"

function NewNoteCard() {
  return (
    <div className={styles.newNote}>
      <BsPlusLg className={styles.plus} />
    </div>
  )
}

export default NewNoteCard;