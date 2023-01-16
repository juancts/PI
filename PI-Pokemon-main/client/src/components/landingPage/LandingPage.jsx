import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"

//import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          Pokemon <span>App</span>
        </h1>
      </div>
      <div>
        <p>
          Go <Link to="/Home">Home</Link>. Welcome to the <b>Pokemon App</b>.
        </p>
      </div>
    </div>
  );
}
