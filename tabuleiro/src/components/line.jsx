import Subdivision from "./subdivision";
import styles from "../styles/line.module.css"

export default function Line(props){
    return(
        <div className={styles.line}>
            <Subdivision black ={props.black}/>
            <Subdivision black ={!props.black}/>
            <Subdivision black ={props.black}/>
            <Subdivision black ={!props.black}/>
            <Subdivision black ={props.black}/>
            <Subdivision black ={!props.black}/>
            <Subdivision black ={props.black}/>
            <Subdivision black ={!props.black}/>

        </div>
    )
}