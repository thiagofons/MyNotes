import { useEffect, useState } from "react";
import styles from "./NoteCard.module.css"

function NoteCard({ id, name, text}) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  
  return (
    <div className={styles.noteCard}>
      <input type="text" value={name} placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
      <textarea placeholder="write here..." onChange={(e) => setContent(e.target.value)}>{text}</textarea>
    </div>
  )
}

export default NoteCard;