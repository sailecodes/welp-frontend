import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const LayoutMainNavLink = ({ linkText, linkIcon }) => {
  return (
    <div className="layout-main-nav-link">
      <motion.div
        initial={{ backgroundColor: "green" }}
        whileHover={{
          width: "60%",
        }}>
        {linkIcon}
        <NavLink to={linkText.toLowerCase()}>{linkText}</NavLink>
      </motion.div>
    </div>
  );
};

export default LayoutMainNavLink;
