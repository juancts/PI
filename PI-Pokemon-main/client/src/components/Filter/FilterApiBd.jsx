import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPokemones } from "../../actions/Actions";
import styles from "./Filter.module.css";

export default function FilterApiBd() {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  function onSelectChange(e) {
    setFilter(e.target.value);
    console.log(filter);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(filterPokemones(filter));
  }

  return (
    <div className={styles.container}>
      <div className={styles.ord}>
        <h4>From DB or Api?</h4>
        <form className={styles.form} onSubmit={onSubmit}>
          <select name="select" onChange={onSelectChange}>
            <option value="database">Database</option>
            <option value="api" selected>Api</option>
          </select>
          <button className={styles.btn} type="submit" value="Filter">
            Filter
          </button>
        </form>
      </div>
    </div>
  );
}
