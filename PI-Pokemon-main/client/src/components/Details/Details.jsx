import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPokeById } from "../../actions/Actions";
import NavBar from "../Navbar/Navbar";
import styles from "./Details.module.css";

export default function Details() {
  const pokemon = useSelector((state) => state.pokedetail);
  const params = useParams();
  const dispatch = useDispatch();

  
  const types = (data)=>{
    try {
      if(data && data.types){
        return data.types.map((e, i)=> <p key={i}>{e}</p>);
      
    } }catch (error) {
        console.error(error)   
    }
  }
  

 

  useEffect(() => {
    dispatch(getPokeById(params.id));
  }, []);

 

  // var pokemonmap = pokemon.types.map((e)=>e)
  // console.log("POKE MAP:",pokemonmap);

  return (
    <div>
      <NavBar />
      <div className={styles.title}>
        <h1>{pokemon.name}</h1>
        <h2>TYPES:</h2>
        
        <div className={styles.types}>
          {types(pokemon)}
          
          </div>
         
      </div>
      <div className={styles.container}>
        <div>
          <p>id: {pokemon.id}</p>
          <h4>Statistics</h4>
          <p>life: {pokemon.health}</p>
          <p>attack: {pokemon.attack}</p>
          <p>defense: {pokemon.defense}</p>
          <p>speed: {pokemon.speed}</p>
          <p>Altura:{pokemon.heigth}</p>
          <p>Peso: {pokemon.weight}</p>
        </div>
        <div>
          <img width="300" src={pokemon.img} alt="" />
        </div>
      </div>
    </div>
  );
}
