import { Link } from "react-router-dom";

const SimpleNav = () => {
  return (
    <nav>
      <ul className="navigation mb-0 p-0">
        <li>
          <Link to="/">Landing Page</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/services">Our Services</Link>
        </li>
        <li>
          <Link to="/blog">Our Blog</Link>
        </li>
        <li>
          <Link to="/shop">Shop with us Today</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us Today</Link>
        </li>
      </ul>
    </nav>
  );
};
export default SimpleNav;
