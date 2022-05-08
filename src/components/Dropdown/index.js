import styles from './Dropdown.module.scss';
import { cx } from '../../styles';
import { useState, useRef, useEffect } from 'react';
import { SearchIcon, DropdownIcon } from '../../assets/svgs';

const WEEK_VALUE = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function useOutsideAlerter(ref, setClickDropdown) {
  useEffect(() => {
    // Function for click event
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (ref.current.dataset.box) {
          setClickDropdown(false);
        }
      }
    }

    // Adding click event listener
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [ref, setClickDropdown]);
}

export default function Dropdown() {
  const [changeValue, setChageValue] = useState('All Days');
  const [clickDropdown, setClickDropdown] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [list, setList] = useState(WEEK_VALUE);

  const box = useRef(null);
  useOutsideAlerter(box, setClickDropdown);

  const openClose = () => {
    setClickDropdown((prev) => !prev);
    setInputValue('');
    setList(WEEK_VALUE);
  };

  const selectValue = (e) => {
    setChageValue(e.target.textContent);
    setClickDropdown((prev) => !prev);
    setInputValue('');
    setList(WEEK_VALUE);
  };

  const onInput = (e) => {
    const tmpArr = [];
    for (const i in WEEK_VALUE) {
      if (WEEK_VALUE[i].toUpperCase().includes(e.target.value.toUpperCase())) {
        tmpArr.push(WEEK_VALUE[i]);
      }
    }
    setList(tmpArr);
  };

  const onChangeInput = (e) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <div className={cx(styles.dropdown)} ref={box} data-box={clickDropdown}>
      <button type="button" className={cx(styles.dropdownName)} onClick={openClose}>
        <div className={cx(styles.nameInput)}>{changeValue}</div>
        <div className={cx(styles.nameDownIcon)}>
          <DropdownIcon />
        </div>
      </button>
      <div className={cx(styles.dropdownList, { [styles.open]: clickDropdown })}>
        <div className={cx(styles.listInputWrapper)}>
          <div className={cx(styles.listSearchIcon)}>
            <SearchIcon />
          </div>
          <input
            className={cx(styles.listInput)}
            type="text"
            onInput={onInput}
            placeholder="Search Day"
            value={inputValue}
            onChange={onChangeInput}
          />
        </div>
        <div className={cx(styles.listWrapper)}>
          <button type="button" className={cx(styles.listValue)} onClick={selectValue}>
            All Days
          </button>
          {list.map((value, i) => (
            <button type="button" className={cx(styles.listValue)} onClick={selectValue} key={value}>
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
