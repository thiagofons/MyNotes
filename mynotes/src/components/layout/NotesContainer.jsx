import React, { useEffect, useState } from "react";

import styles from "./NotesContainer.module.css";

import NewNoteCard from "../note/NewNoteCard";
import NoteCard from "../note/NoteCard";

export default function NotesContainer(props) {
  const [notes, setNotes] = useState([]);

  // Get notes
  useEffect(() => {
    recoverData();
  }, []);

  // Save data on localStorage
  const saveData = (id, title, content) => {
    setNotes(
      notes.map((note) => {
        console.log(note);
        if (note.id === id) {
          console.log(note.id);
          note.title = title;
          note.content = content;
        }
      })
    );
    localStorage.setItem("notes", JSON.stringify(notes));
    recoverData();
  };

  // Recover data from localStorage
  const recoverData = () => {
    const items = JSON.parse(localStorage.getItem("notes"));
    if (items) setNotes(items);
  };

  // Add notes button
  const addNote = () => {
    let newNoteObj = {
      id: notes.length,
      title: "",
      content: "",
    };
    setNotes([...notes, newNoteObj]);
    if (notes) localStorage.setItem("notes", JSON.stringify(notes));
  };

  // Remove note button
  const removeNote = (id) => {
    console.log(notes, id);

    setNotes(notes.filter((note) => note.id !== id));
    
    if (notes) localStorage.setItem("notes", JSON.stringify(notes));
    
  };

  return (
    <div className={styles.notesContainer}>
      {notes &&
        notes.map((note, index) => (
          <NoteCard
            key={index}
            id={note.id}
            handleRemove={removeNote}
            handleSubmit={saveData}
            name={note.title}
            text={note.content}
          />
        ))}

      <NewNoteCard action={addNote} />
    </div>
  );
}
