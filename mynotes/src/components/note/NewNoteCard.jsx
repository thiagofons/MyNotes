import { BsPlusLg } from "react-icons/bs";

import styles from "./NewNoteCard.module.css";

export default function NewNoteCard({ action }) {
  return (
    <div className={styles.newNote} onClick={action}>
      <BsPlusLg className={styles.plus} />
    </div>
  );
}
