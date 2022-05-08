import styles from './Slider.module.scss';
import { cx } from '../../styles';
import { useState } from 'react';

const SIZE_NUMBER = [1, 25, 50, 75, 100];

export default function Slider() {
  const [changeNum, setChangeNum] = useState(1);
  const value = (e) => {
    setChangeNum(e.target.value);
  };

  const move = (e) => {
    setChangeNum(Number(e.target.dataset.val));
  };

  return (
    <div className={cx(styles.slider)}>
      <div className={cx(styles.sliderCount)}>
        <div className={cx(styles.sliderCountNumber)}>
          <b>{changeNum}</b>&nbsp;&nbsp;%
        </div>
      </div>
      <div className={cx(styles.sliderOptions)}>
        <div className={cx(styles.sliderBackground)}>
          {SIZE_NUMBER.map((value) => (
            <div className={cx(styles.sliderBackgroundDot, { [styles.before]: changeNum >= value })} key={value} />
          ))}
        </div>
        <div
          className={cx(styles.back)}
          style={{
            background: `linear-gradient(to right, #04aa6d ${changeNum}%, #d3d3d3 ${changeNum}% ${100 - changeNum}%)`,
          }}
        />
        <input
          className={cx(styles.sliderOptionsRange)}
          type="range"
          min={SIZE_NUMBER[0]}
          max={SIZE_NUMBER[SIZE_NUMBER.length - 1]}
          step="1"
          onChange={value}
          value={changeNum}
          list="number"
        />
      </div>
      <div className={cx(styles.ticks)}>
        {SIZE_NUMBER.map((value) => (
          <span className={cx(styles.numberWrapper)} key={value}>
            <button
              type="button"
              className={cx(styles.sliderNumber)}
              onClick={move}
              key={value}
              data-val={Number(value, 10)}
            >
              {value}%
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
