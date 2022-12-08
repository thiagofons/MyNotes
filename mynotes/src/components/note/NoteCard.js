import styles from "./NoteCard.module.css"

function NoteCard() {
  return (
    <div className={styles.noteCard}>
      <div>
        <h2>Nome da nota</h2>
      </div>

      <div>
        <textarea></textarea>
      </div>
    </div>
  )
}

export default NoteCard;