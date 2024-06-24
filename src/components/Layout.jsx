import { useState } from "react";
import { Outlet } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import AuthPopup from "./AuthPopup";

const Layout = () => {
  const [authPopupActive, setAuthPopupActive] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);
  const [signupClicked, setSignupClicked] = useState(false);

  const onSearch = (e) => {
    e.preventDefault();
  };

  const onAuthBtnClicked = (loginClicked) => {
    setAuthPopupActive(true);
    if (loginClicked) setLoginClicked(true);
    else setSignupClicked(true);
  };

  return (
    <>
      {authPopupActive && loginClicked && (
        <AuthPopup
          setAuthPopupActive={setAuthPopupActive}
          isSignupWindow={false}
          setBtnClicked={setLoginClicked}
        />
      )}
      {authPopupActive && signupClicked && (
        <AuthPopup
          setAuthPopupActive={setAuthPopupActive}
          isSignupWindow
          setBtnClicked={setSignupClicked}
        />
      )}
      <div className="layout">
        <nav className="layout--nav">
          <p className="layout--nav-logo">welp.</p>
          <form
            className="layout--nav-search"
            onSubmit={onSearch}>
            <input
              className="layout--nav-search-input"
              type="text"
              placeholder="Search for restaurants..."
            />
            <button className="layout--nav-search-btn">
              <CiSearch />
            </button>
          </form>
          <div className="layout--btns">
            <button
              className="layout--btns-login"
              onClick={() => onAuthBtnClicked(true)}>
              Log In
            </button>
            <button
              className="layout--btns-signup"
              onClick={() => onAuthBtnClicked(false)}>
              Sign Up
            </button>
          </div>
        </nav>
        <Outlet context={setAuthPopupActive} />
        <section className="layout--footer">Created by Elias IV Roman. Inspired by Yelp.</section>
      </div>
    </>
  );
};

export default Layout;
