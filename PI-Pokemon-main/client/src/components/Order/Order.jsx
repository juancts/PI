import { AZ, ZA, ATTACKASC, ATTACKDSC } from "./types";
import { getAllPoke, sortPokemones } from "../../actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Order.module.css";
import { useEffect, useState } from "react";

export default function Order({ pokemones }) {
  const dispatch = useDispatch();

  console.log("ORDER:", pokemones);

  function onSelectChange(e) {
    e.preventDefault();
    dispatch(sortPokemones(e.target.value, pokemones));
  }

  return (
    <div className={styles.container}>
      <div className={styles.ord}>
        <h4>Order by name</h4>

        <select name="name" onChange={onSelectChange}>
          <option value={AZ}>A-Z</option>
          <option value={ZA}>Z-A</option>
        </select>
      </div>
      <div className={styles.ord}>
        <h4>Order by attack</h4>

        <select name="attack" onChange={onSelectChange}>
          <option value={ATTACKASC}>Attack asc</option>
          <option value={ATTACKDSC}>Attack dsc</option>
        </select>
      </div>
    </div>
  );
}
