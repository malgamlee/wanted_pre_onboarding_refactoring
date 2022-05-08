import { cx } from '../styles';
import styles from './Routes.module.scss';
import Toggle from '../components/Toggle';
import Tab from '../components/Tab';
import Slider from '../components/Slider';
import Dropdown from '../components/Dropdown';
import Input from '../components/Input';

function App(props) {
  return (
    <div className={cx(styles.app)}>
      <p className={cx(styles.title)}>Wanted Pre Onboarding #Frontend</p>
      <div className={cx(styles.component)}>
        <p className={cx(styles.title)}>Toggle</p>
        <Toggle />
      </div>
      <div className={cx(styles.component)}>
        <p className={cx(styles.title)}>Tab</p>
        <Tab />
      </div>
      <div className={cx(styles.component)}>
        <p className={cx(styles.title)}>Slider</p>
        <Slider />
      </div>
      <div className={cx(styles.component)}>
        <p className={cx(styles.title)}>Input</p>
        <Input />
      </div>
      <div className={cx(styles.component)}>
        <p className={cx(styles.title)}>Dropdown</p>
        <Dropdown />
      </div>
    </div>
  );
}

export default App;
