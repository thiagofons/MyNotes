import { useEffect, useState } from "react";

import {AiOutlineMinus} from "react-icons/ai";

import styles from "./NoteCard.module.css"

function NoteCard({ id, name, text, del }) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  
  return (
    <div className={styles.noteCard} id={id} >
      <AiOutlineMinus className={styles.closeBtn} onClick={del(id)}/>
      <input type="text" value={name} placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
      <textarea placeholder="write here..." onChange={(e) => setContent(e.target.value)}>{text}</textarea>
    </div>
  )
}

export default NoteCard;