import Container from "../layout/Container";
import NavBar from "../layout/NavBar";
import NotesContainer from "../layout/NotesContainer";

export default function Home() {

  return (
    <>
      <Container>
        <NavBar />
        <NotesContainer />
      </Container>
    </>
  );
}


