// Just show the top Navigation
import Navigation from "../navigation/SimpleNav";

const Shop = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <h1 className="text-danger">This page doesn't include the Footer</h1>
    </div>
  );
};
export default Shop;
