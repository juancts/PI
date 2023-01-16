import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTypes, filterPokemones } from "../../actions/Actions";
import Cards from "../Cards/Cards";
import styles from "./Filter.module.css";


export default function Filter() {
  //Seteo los hooks de useState
  const [filter, setFilter] = useState("");
  const typesApi = useSelector((state) => state.types);
  const dispatch = useDispatch();
  
  

  function onSubmit(e) {
    e.preventDefault();
    dispatch(filterPokemones(filter));
    
  }

  function onSelectChange(e) {
    setFilter(e.target.value);
  }

  useEffect(() => {
  dispatch(addTypes(typesApi));
   }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.ord}>
        <h4>Filter By Type</h4>
        <form className={styles.form} onSubmit={onSubmit}>
          <select name="select" onChange={onSelectChange}>
            {typesApi && typesApi.map((e) => <option value={e}>{e}</option>)}
          </select>
          <button className={styles.btn} type="submit" value="Filter">
            Filter
          </button>
        </form>
      </div>
    </div>
  );
}
