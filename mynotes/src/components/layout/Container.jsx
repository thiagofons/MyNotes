import { useEffect, useState } from "react";

import NoteCard from "../note/NoteCard";
import NewNoteCard from "../note/NewNoteCard";

import styles from "./Container.module.css";

function Container() {
  const [notes, setNotes] = useState([]);

  // Get current notes
  useEffect(() => {
    fetch("http://localhost:4000/notes", {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setNotes(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addNote = () => {
    setNotes((notes) => [...notes, `<NoteCard />`]);

    const newNote = {
      id: notes.length,
      title: "",
      content: ""
    }

    fetch("http://localhost:4000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/jon"
      },
      body: JSON.stringify(newNote)
    }).then(resp => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err))
  };

  return (
    <div className={styles.container}>
      {notes &&
        notes.map((note) => (
          <NoteCard
            key={note.id}
            id={note.id}
            name={note.title}
            text={note.content}
          />
        ))}
      <NewNoteCard onClick={addNote} />
    </div>
  );
}

export default Container;
