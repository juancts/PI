import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/allPokes">All Pokemones </Link>
            </li>
            <li>
              <Link to="/addpokes">Add new Pokemon </Link>
            </li>
            <li>
              <Link to="/updatepokes">Update Pokemon </Link>
            </li>
            <li>
              <Link to="/filter">Filter Pokemon </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}
