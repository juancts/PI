import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTypes, getAllPoke, getType } from "../../actions/Actions.js";
import Card from "../Card/Card.jsx";
import NavBar from "../Navbar/Navbar.jsx";
import styles from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const pokemones = useSelector((state) => state.filteredPokemones);

  useEffect(() => {
    dispatch(getAllPoke());
    dispatch(addTypes(types));
  }, []);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div align="center">
        <h1>¡WELCOME TO THE POKEMON HOME!</h1>
        <h3>click "All Pokemons" to start!</h3>
        <hr width="400" size="2px" color="black" />
        
        </div>
        
      <div className={styles.container}>
        
        {pokemones &&
          pokemones.slice(20, 24)
          .map((e, i) => (
            <div key={i}>
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
    </div>
  );
}
