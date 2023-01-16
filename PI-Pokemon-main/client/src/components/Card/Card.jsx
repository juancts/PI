import { Link } from "react-router-dom";
import styles from "./Card.module.css"

export default function Card(props) {

   
    return (

       <div className={styles.container}>
          <div className={styles.buttonContainer}>
             <button>X</button>
          </div>
          <Link to={`/details/${props.id}`}>
          <span>
          <h2>{props.name}</h2>
          <h4>tipos:</h4>
          <p>{props.type.toString()}</p>

          </span>
          <img className={styles.image} src={props.img} alt={props.name} />
          </Link>
         
       </div>
    );
 }