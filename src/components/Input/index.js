import { useState } from 'react';
import styles from './Input.module.scss';
import { cx } from '../../styles';
import { CheckIdIcon, CheckPwOpenIcon, CheckPwCloseIcon } from '../../assets/icons';

export default function Input() {
  const [isEmailCheck, setIsEmailCheck] = useState(false);
  const [isPasswordEncrypt, setIsPasswordEncrypt] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPw, setUserPw] = useState('');

  const emailCheck = (e) => {
    // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.
    const emailRegExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(?:\.[a-zA-Z0-9-]+)+$/;
    setIsEmailCheck(emailRegExp.test(e.currentTarget.value));
  };

  const passwordCheck = () => {
    setIsPasswordEncrypt(!isPasswordEncrypt);
  };

  const handleUserEmail = (e) => {
    setUserEmail(e.currentTarget.value);
  };

  const handleUserPw = (e) => {
    setUserPw(e.currentTarget.value);
  };
  return (
    <div className={cx(styles.input)}>
      <div className={cx(styles.inputWrapper)}>
        <div className={cx(styles.email)}>
          <div className={cx(styles.inputTitle)}>E-mail</div>
          <div className={cx(styles.inputBox)}>
            <input
              className={cx(styles.inputValue)}
              type="email"
              onChange={emailCheck}
              onInput={handleUserEmail}
              value={userEmail}
              placeholder="E-mail"
            />
            <div className={cx(styles.inputIcon)}>
              <CheckIdIcon color={isEmailCheck ? '#4caf50' : 'lightgray'} />
            </div>
          </div>
        </div>
        <div className={cx(styles.password)}>
          <div className={cx(styles.inputTitle)}>Password</div>
          <div className={cx(styles.inputBox)}>
            <input
              className={cx(styles.inputValue)}
              type={`${!isPasswordEncrypt ? 'password' : 'text'}`}
              onInput={handleUserPw}
              value={userPw}
              placeholder="Password"
            />
            <div>
              <div className={cx(styles.inputIcon, styles.pwIcon)}>
                <button type="button" onClick={passwordCheck}>
                  {isPasswordEncrypt ? <CheckPwOpenIcon color="#4caf50" /> : <CheckPwCloseIcon color="lightgray" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
