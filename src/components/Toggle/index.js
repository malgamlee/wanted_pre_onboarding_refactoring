import { useState } from 'react';
import styles from './Toggle.module.scss';
import { cx } from '../../styles';

export default function Toggle() {
  const [isToggleChecked, setIsToggleChecked] = useState(false);

  const clickToggle = () => {
    setIsToggleChecked((prev) => !prev);
  };

  return (
    <div className={cx(styles.toggle)}>
      <div className={cx(styles.wrapper)}>
        <div className={cx(styles.toggleMove, { [styles.move]: isToggleChecked })} />
        <div className={cx(styles.buttons)}>
          <button
            className={cx(styles.button, { [styles.clicked]: !isToggleChecked })}
            type="button"
            onClick={clickToggle}
          >
            기본
          </button>
          <button
            className={cx(styles.button, { [styles.clicked]: isToggleChecked })}
            type="button"
            onClick={clickToggle}
          >
            상세
          </button>
        </div>
      </div>
    </div>
  );
}
