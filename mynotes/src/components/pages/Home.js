import NewNoteCard from "../note/NewNoteCard";
import NoteCard from "../note/NoteCard";
import styles from "./Home.module.css"

function Home() {
  // Importar os cards do usuário via fetch API

  return (
    <div className={styles.notesContainer}>
      <NoteCard />
      <NoteCard />
      <NewNoteCard />
    </div>
  );
}

export default Home;