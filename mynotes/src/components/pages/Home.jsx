import NewNoteCard from "../note/NewNoteCard";
import NoteCard from "../note/NoteCard";

import Container from "../layout/Container";
import NavBar from "../layout/NavBar";

function Home() {
  // Importar os cards do usuário via fetch API

  return (
    <>
      <NavBar />
      <Container />
    </>
  );
}

export default Home;
