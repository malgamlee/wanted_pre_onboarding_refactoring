import { useState } from 'react';
import styles from './Tab.module.scss';
import { cx } from '../../styles';

const TAP_DATA = [
  { id: 0, name: '숙주' },
  { id: 1, name: '유부' },
  { id: 2, name: '청경채' },
  { id: 3, name: '버섯' },
];

export default function Tab() {
  const [isTabChecked, setIsTabChecked] = useState(0);

  const clickTab = (e) => {
    setIsTabChecked(Number(e.target.dataset.val, 10));
  };

  const tabWidth = {
    width: `${Number(TAP_DATA.length * 110)}px`,
  };

  const moveUnderline = {
    transform: `translateX(${isTabChecked * 110}px)`,
  };
  return (
    <div className={cx(styles.tab)} style={tabWidth}>
      <div className={cx(styles.buttonsWrapper)}>
        {TAP_DATA.map((value, i) => (
          <button
            className={cx(styles.button, { [styles.tabClicked]: isTabChecked === i })}
            type="button"
            onClick={clickTab}
            data-val={i}
            key={value.name}
          >
            {value.name}
          </button>
        ))}
        <div className={cx(styles.tabUnder)}>
          <div className={cx(styles.underline)} style={moveUnderline} />
        </div>
      </div>
    </div>
  );
}
