import { useState } from 'react';
import styles from './Toggle.module.scss';
import cn from 'classnames';

export default function Toggle() {
  const [isToggleChecked, setIsToggleChecked] = useState(false);

  const clickToggle = () => {
    setIsToggleChecked((prev) => !prev);
  };

  return (
    <div className={cn(styles.toggle)}>
      <div className={cn(styles.wrapper)}>
        <div className={cn(styles.toggleMove, { [styles.move]: isToggleChecked })} />
        <div className={cn(styles.buttons)}>
          <button
            className={cn(styles.button, { [styles.clicked]: !isToggleChecked })}
            type="button"
            onClick={clickToggle}
          >
            기본
          </button>
          <button
            className={cn(styles.button, { [styles.clicked]: isToggleChecked })}
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
