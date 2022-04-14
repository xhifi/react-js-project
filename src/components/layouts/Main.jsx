import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";

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
