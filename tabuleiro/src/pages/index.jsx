import styles from '../styles/subdivision.module.css'
import Subdivision from '../components/subdivision'


export default function Home(){
  return(
    <div className={styles.container}>
      <Subdivision></Subdivision>
      <Subdivision></Subdivision>
      <Subdivision></Subdivision>
      
    </div>
  )
}