import React, { useEffect, useState } from "react";

import styles from "./NotesContainer.module.css";

import NewNoteCard from "../note/NewNoteCard";
import NoteCard from "../note/NoteCard";
import useStateWithCallback from "../tools/UseStateWithCallback";

export default function NotesContainer() {
  const [notes, setNotes] = useStateWithCallback([]);
  const [numNotes, setNumNotes] = useStateWithCallback(0);

  useEffect(() => {
    // Recover note from localStorage
    const items = JSON.parse(localStorage.getItem("notes"));
    if (items) setNotes(items);

    // Recover the number of notes from localStorage
    const num = JSON.parse(localStorage.getItem("numNotes"));
    if (num) {
      setNumNotes(num);
    } else {
      setNumNotes(0);
      localStorage.setItem("numNotes", JSON.stringify(0));
    }
  }, []);

  const addNote = () => {
    let newNoteObj = {
      id: numNotes,
      title: "",
      content: "",
    };
    setNotes([...notes, newNoteObj], (prevNotes, newNotes) => {
      localStorage.setItem("notes", JSON.stringify(newNotes));

      // Update num notes
      setNumNotes(numNotes + 1, (prevNumNotes, newNumNotes) => {
        localStorage.setItem("numNotes", JSON.stringify(newNumNotes));
      });
    });
  };

  const removeNote = (id) => {
    setNotes(
      notes.filter((note) => note.id !== id),
      (prevNotes, newNotes) => {
        localStorage.setItem("notes", JSON.stringify(newNotes));
      }
    );
  };

  const editNote = (id, title, content) => {
    setNotes([...notes], (prevNotes, newNotes) => {
      newNotes.forEach((note) => {
        if (note.id === id) {
          note.title = title;
          note.content = content;
        }
      });
      localStorage.setItem("notes", JSON.stringify(newNotes));
    });
  };

  return (
    <div className={styles.notesContainer}>
      {notes &&
        notes.map((note) => (
          <NoteCard
            key={note.id}
            id={note.id}
            name={note.title}
            handleRemove={removeNote}
            handleSubmit={editNote}
            text={note.content}
          />
        ))}

      <NewNoteCard action={addNote} />
    </div>
  );
}
