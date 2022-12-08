import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/pages/Home";

import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <Router>
      <NavBar/>

      <Container>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Container>

    </Router>
  );
}

export default App;
