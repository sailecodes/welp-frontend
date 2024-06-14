import { Link, Outlet } from "react-router-dom";
import { CiLogout, CiSearch, CiForkAndKnife, CiStar } from "react-icons/ci";
import LayoutMainNavLink from "./LayoutMainNavLink";

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
        <Link
          to="/"
          className="layout--main-logo">
          welp.
        </Link>
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
          <LayoutMainNavLink
            linkText="Restaurants"
            linkIcon={<CiForkAndKnife />}
          />
          <LayoutMainNavLink
            linkText="Favorites"
            linkIcon={<CiStar />}
          />
          <button onClick={handleLogout}>
            <CiLogout />
            Logout
          </button>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
