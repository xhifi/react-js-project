import Ref from "./core/Ref";

const ListCol = (props) => {
  const { title, options } = props;
  return (
    <div className="col footer-col">
      <ul className="list-unstyled mb-4 mb-md-4 mb-lg-0">
        <li className="h3">Title</li>
        <li>
          <Ref options={{ link: "/", text: "First Link" }} classes="bg-transparent text-white text-decoration-none ms-1" />
        </li>
        <li>
          <Ref options={{ link: "/", text: "First Link" }} classes="bg-transparent text-white text-decoration-none ms-1" />
        </li>
        <li>
          <Ref options={{ link: "/", text: "First Link" }} classes="bg-transparent text-white text-decoration-none ms-1" />
        </li>
        <li>
          <Ref options={{ link: "/", text: "First Link" }} classes="bg-transparent text-white text-decoration-none ms-1" />
        </li>
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <div className="container-fluid px-3 px-lg-5 bg-dark text-white py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <ListCol />
          <ListCol />
          <ListCol />
          <ListCol />
        </div>
      </div>
      <div className="container-fluid text-center py-3 bg-dark border-top text-white">Site Developed by John Doe at ACME Inc.</div>
    </>
  );
};
export default Footer;
