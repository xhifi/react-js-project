const CardsLayout = ({ children }) => {
  return (
    <div className="container col-11">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">{children}</div>
    </div>
  );
};
export default CardsLayout;
