import { Link } from "react-router-dom";

import styles from "./NavBar.module.css"
import logo from "../../imgs/MyNotes-Logo.png";
import Profile from "../options/Profile";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/home">
        <img src={logo} alt="logo" />
      </Link>

      <Profile />
    </nav>
  );
}

export default NavBar;
