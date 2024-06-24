import { Outlet } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Layout = () => {
  const onSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="layout">
      <div className="layout--auth">
        <div className="layout--auth-popup"></div>
      </div>
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
          <button className="layout--btns-login">Log In</button>
          <button className="layout--btns-signup">Sign Up</button>
        </div>
      </nav>
      <Outlet />
      <section className="layout--footer">Created by Elias IV Roman. Inspired by Yelp.</section>
    </div>
  );
};

export default Layout;
