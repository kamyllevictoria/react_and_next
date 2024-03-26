import styles from '../styles/subdivision.module.css'

export default function Subdivision(props){
    return(
        <div style={{
            backgroundColor: props.black ? "#000" : "#fff"
        }} 
        className={styles.sub}>

        </div>
    )
}