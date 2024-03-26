import Subdivision from "./subdivision";
import styles from "../styles/line.module.css"

export default function Line(props){
    return(
        <div className={styles.line}>
            <Subdivision />
            <Subdivision black/>
            <Subdivision />
            <Subdivision black/>
            <Subdivision />
            <Subdivision black/>
            <Subdivision />
            <Subdivision black/>

        </div>
    )
}