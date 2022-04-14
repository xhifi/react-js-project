import Nav from "./Nav";

const navData = [
  {
    link: "/",
    text: "Home",
    icon: "",
  },
  {
    link: "/about",
    text: "About Us",
    icon: "",
  },
  {
    link: "/services",
    text: "Our Services",
    icon: "",
  },
  {
    link: "/blog",
    text: "Our Blog",
    icon: "",
  },
  {
    link: "/contact",
    text: "Contact Us Today",
    icon: "",
  },
];

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="container">
        <span>Logo</span>
        <Nav data={navData} />
      </div>
    </div>
  );
};
export default Navigation;
