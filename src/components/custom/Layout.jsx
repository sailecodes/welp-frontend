import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const handleLogout = (e) => {
    e.preventDefault();
  };

  return (
    <div className="layout">
      <div className="layout--main">
        <p className="layout--main-logo">Welp</p>
        <nav className="layout--main-nav">
          <Link to="">Restaurants</Link>
          <Link to="">Favorites</Link>
          <button onClick={handleLogout}>Logout</button>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;