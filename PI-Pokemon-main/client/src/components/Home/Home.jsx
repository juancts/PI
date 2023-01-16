import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTypes, getAllPoke } from "../../actions/Actions.js";
import NavBar from "../Navbar/Navbar.jsx";
import styles from "./Home.modules.css"

export default function Home() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  
  

  useEffect(() => {
    dispatch(getAllPoke());
    dispatch(addTypes(types));
  }, []);
  

  
  //   useEffect(()=>{
  //       dispatch(createTypes());
  //  },[dispatch])

  return (
    
    <div>
      <NavBar />
    </div>
  
  );
}
