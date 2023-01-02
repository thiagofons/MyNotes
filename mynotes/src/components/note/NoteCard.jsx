import { useEffect, useState } from "react";
import _uniqueId from 'lodash/uniqueId';

import { AiOutlineMinus } from "react-icons/ai";

import styles from "./NoteCard.module.css";

export default function NoteCard({
  id,
  handleRemove,
  name,
  text,
  handleSubmit,
}) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setTitle(name);
    setContent(text);
  }, []);

  // Submit note
  const submit = (e) => {
    e.preventDefault();
    handleSubmit(id, title, content);
  };

  return (
    <form
      className={styles.noteCard}
      id={id}
      onSubmit={(e) => submit(e)}
      onChange={(e) => setEditing(true)}
    >
      <AiOutlineMinus
        className={styles.closeBtn}
        onClick={(e) => handleRemove(id)}
      />
      <input
        type="text"
        value={title ? title : ""}
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="insert your note here..."
        onChange={(e) => setContent(e.target.value)}
        value={content ? content : ""}
      ></textarea>
      <button
        type="submit"
        className={`${styles.submitBtn} ${editing ? styles.display : ""}`}
        onClick={(e) => setEditing(false)}
      >
        Save Changes
      </button>
    </form>
  );
}
