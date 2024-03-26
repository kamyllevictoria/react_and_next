import Subdivision from '../components/subdivision';
import styles from '../styles/subdivision.module.css';
import Line from '../components/line';

export default function Home() {
  return (
    <div className={styles.container}>
      <Line/>
      <Line/>
    </div>
  );
}
