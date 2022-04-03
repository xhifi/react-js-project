import Ref from "./core/Ref";

const Navigation = () => {
  const navigationData = {
    links: [
      {
        link: "/",
        text: "Home",
      },
      {
        link: "/about",
        text: "About Us",
      },
      {
        link: "/blog",
        text: "Our Blog",
      },
      {
        link: "/contact",
        text: "Contact Us",
      },
      {
        link: "https://www.wikipedia.org",
        text: "Wikipedia",
      },
    ],
  };
  return (
    <div>
      <h3>CHECK THE LINKS BELOW - Navigation Child</h3>
      <ul className="list-unstyled mb-0 navigation-list">
        {navigationData.links.map(function (namrah, index) {
          return (
            <li key={index} className="d-inline">
              <Ref options={namrah} classes="btn me-1 btn-sm" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Navigation;
