import { Link } from "react-router-dom";

import styles from "./NavBar.module.css"
import logo from "../../imgs/MyNotes-Logo.png";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="logo" />
    </nav>
  );
}

export default NavBar;
