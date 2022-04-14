import { Link } from "react-router-dom";

const Nav = ({ data }) => {
  return (
    <nav>
      <ul>
        {data.map((item, index) => {
          return (
            <li>
              <Link to={item.link}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Nav;
