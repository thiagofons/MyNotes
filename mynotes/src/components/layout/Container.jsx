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
    for (let key in localStorage) {
      const item = JSON.parse(localStorage.getItem(key));

      if(item) {
        const newNote = (
          <NoteCard id={key} name={item.title} text={item.content} />
        );
  
        setNotes((notes) => [...notes, newNote]);
      }
      
    }
  };

  const addNote = () => {
    setNotes((notes) => [...notes, `<NoteCard />`]);

    const newNote = {
      id: notes.length,
      title: "",
      content: "",
    };
    localStorage.setItem(newNote.id, JSON.stringify(newNote));
  };

  const deleteNote = (id) => {
    // Delete on the DOM
    const newNotes = notes.filter((note) => {
      console.log(note.props.id);
      return note.props.id != id;
    });
    setNotes(newNotes);

    // Delete on the localStorage
    localStorage.removeItem(id);
  };

  return (
    <div className={styles.container}>
      {notes &&
        notes.map((note, index) => (
          <NoteCard
            key={index}
            id={index
            }
            name={note.title}
            text={note.content}
            handleDel={deleteNote}
          />
        ))}
      <NewNoteCard onClick={addNote} />
    </div>
  );
}

export default Container;
