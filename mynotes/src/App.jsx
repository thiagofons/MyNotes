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
    <Home />
  );
}

export default App;
