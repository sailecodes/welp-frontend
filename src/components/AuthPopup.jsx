import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const AuthPopup = ({ setAuthPopupActive, isSignupWindow, setBtnClicked }) => {
  const [alternateWindow, setAlternateWindow] = useState(isSignupWindow);

  const onAuth = (e) => {
    e.preventDefault();
  };

  const onWindowClose = () => {
    setAuthPopupActive(false);
    setBtnClicked(false);
  };

  return (
    <div className="auth-popup">
      <div className="auth-popup--window">
        <button
          className="auth-popup--window-close-btn"
          onClick={onWindowClose}>
          <IoCloseOutline />
        </button>
        <header className="auth-popup--window-logo">welp.</header>
        <p className="auth-popup--window-tag">Find restaurants with ease</p>
        <form
          className="auth-popup--window-form"
          onClick={onAuth}>
          {isSignupWindow && (
            <input
              type="text"
              placeholder="Username"
            />
          )}
          <input
            type="text"
            placeholder="Email"
          />
          <input
            type="password"
            placeholder="Password"
          />
          {isSignupWindow && (
            <>
              <button type="submit">Signup</button>
              <div className="auth-popup--change-window">
                Already on member?
                <span onClick={() => setAlternateWindow(!alternateWindow)}> Login</span>
              </div>
            </>
          )}
          {!isSignupWindow && (
            <>
              <button type="submit">Login</button>
              <div className="auth-popup--change-window">
                Not yet a member?
                <span onClick={() => setAlternateWindow(!alternateWindow)}> Signup</span>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthPopup;
