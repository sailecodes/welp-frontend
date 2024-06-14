import { NavLink, Outlet } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Layout = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleLogout = (e) => {
    e.preventDefault();
  };

  return (
    <div className="layout">
      <div className="layout--main">
        <p className="layout--main-logo">welp</p>
        <form
          className="layout--main-search-form"
          onSubmit={handleSearch}>
          <input
            className="layout--main-search-form-input"
            type="search"
            placeholder="Search for a business"
          />
          <button className="layout--main-search-form-btn">
            <CiSearch />
          </button>
        </form>
        <nav className="layout--main-nav">
          <LayoutMainNavLink linkText="Restaurants" />
          <LayoutMainNavLink linkText="Favorites" />
          <button onClick={handleLogout}>Logout</button>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

const LayoutMainNavLink = ({ linkText }) => {
  return (
    <div className="layout-main-nav-link">
      <NavLink to={linkText.toLowerCase()}>{linkText}</NavLink>
      <div />
    </div>
  );
};

export default Layout;
