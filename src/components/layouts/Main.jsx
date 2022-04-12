import Footer from "../footer/Footer";
import Navigation from "../navigation/SimpleNav";

const Main = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};
export default Main;
