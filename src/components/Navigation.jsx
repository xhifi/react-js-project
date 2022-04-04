import Ref from "./core/Ref";

import data from "../data/pages.json";

const Navigation = () => {
  const { pages } = data;
  console.log(pages);

  return (
    <div>
      <nav>
        <ul className="navigation-list">
          {pages.map((page, index) => {
            return (
              <li key={index}>
                <Ref options={{ link: page.link, text: page.title }} classes="btn btn-sm me-1" />
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
