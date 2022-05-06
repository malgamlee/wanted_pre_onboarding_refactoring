import styles from './Routes.module.scss';
import Toggle from './Toggle';
import Tab from './Tab';
import Slider from './Slider';

function App(props) {
  return (
    <div className={styles.app}>
      <Toggle />
      <Tab />
      <Slider />
    </div>
  );
}

export default App;
