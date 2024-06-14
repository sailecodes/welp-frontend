import { NavLink } from "react-router-dom";

const LayoutMainNavLink = ({ linkText, linkIcon }) => {
  return (
    <div className="layout-main-nav-link">
      {linkIcon}
      <NavLink to={linkText.toLowerCase()}>{linkText}</NavLink>
    </div>
  );
};

export default LayoutMainNavLink;
