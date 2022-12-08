import { Link } from "react-router-dom";

import styles from "./NavBar.module.css"
import logo from "../../imgs/MyNotes-Logo.png";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/home">
        <img src={logo} alt="logo" />
      </Link>
    </nav>
  );
}

export default NavBar;
