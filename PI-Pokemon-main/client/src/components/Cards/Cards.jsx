import styles from "./Cards.module.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPoke, getType } from "../../actions/Actions";
import Card from "../Card/Card";
import Order from "../Order/Order";
import NavBar from "../Navbar/Navbar";
import Pagination from "../pagination/Pagination";
import Filter from "../Filter/Filter";
import FilterApiBd from "../Filter/FilterApiBd";
export default function Cards() {
  const [page, setPage] = useState(1);
  const [forPage, setforPage] = useState(12);

  const dispatch = useDispatch();
  const pokemones = useSelector((state) => state.filteredPokemones);

  const maxPages = pokemones.length / forPage;

  useEffect(() => {
    dispatch(getAllPoke());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <div>
        <Order pokemones = {pokemones}/>
      </div>
      <div>
      <div className={styles.filter}>
        <Filter />
      </div>
      <div className={styles.filter}>
        <FilterApiBd />
      </div>
      </div>
      <div className={styles.container}>
        {pokemones &&
          pokemones
            .slice((page - 1) * forPage, (page - 1) * forPage + forPage)
            .map((e, i) => (
              <div key={i} className={styles.containerChild}>
                <Card
                  key={e.id}
                  name={e.name}
                  type={getType(e.id, pokemones)}
                  img={e.img}
                  id={e.id}
                />
              </div>
            ))}
      </div>
      <div className={styles.pages}>
        <Pagination page={page} setPage={setPage} maxPages={maxPages} />
      </div>
    </div>
  );
}
