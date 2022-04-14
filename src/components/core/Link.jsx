import { Link } from "react-router-dom";

const LinkComponent = ({ to, children }) => {
  if (to.split(0, 1) === "/") {
    return <Link to={to}>{children}</Link>;
  }
  return (
    <a href={to} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
export default LinkComponent;
