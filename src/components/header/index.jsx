import { Link } from "react-router-dom"
import styles from "./styles.module.css"
const Header =  () =>{
    return(
    <div className={styles.module}>
    <nav>
        <Link to="/">Home Pages</Link>
        <Link to="/chat">Messages</Link>
        <Link to="/test">Api</Link>
    </nav>
    </div>
    )
}
export default Header