import { useEffect, useState } from "react";

import NoteCard from "../note/NoteCard";
import NewNoteCard from "../note/NewNoteCard";

import styles from "./Container.module.css";

function Container() {
  const [notes, setNotes] = useState([]);

  // Get current notes
  useEffect(() => {
    setNotes([]);
    getNotes();
  }, []);

  const getNotes = () => {
    for(let i = 0; i < localStorage.length; i++) {
      const item = JSON.parse(localStorage.getItem(i));
      console.log(item);
      const newNote = <NoteCard id={localStorage.key(i)} name={item.title} text={item.content}/>

      setNotes((notes) => [...notes, newNote]);
    }
  }

  const addNote = () => {
    setNotes((notes) => [...notes, `<NoteCard />`]);

    const newNote = {
      id: notes.length,
      title: "",
      content: ""
    }
    localStorage.setItem(newNote.id, JSON.stringify(newNote));
  };

  const deleteNote = (id) => {
    console.log(id);
  }

  return (
    <div className={styles.container}>
      {notes &&
        notes.map((note) => (
          <NoteCard
            key={note.id}
            id={note.id}
            name={note.title}
            text={note.content}
            del={deleteNote}
          />
        ))}
      <NewNoteCard onClick={addNote} />
    </div>
  );
}

export default Container;
