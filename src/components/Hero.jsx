import { Link } from "react-router-dom";

const Hero = ({ heading, description, btnText, btnLink, img }) => {
  if (!img) {
    return (
      <div className="container-img-none">
        <div className="hero-container">
          <div className="row">
            <div className="col">
              {heading && <h2>{heading}</h2>}
              {description && <p>{description}</p>}
              {btnText && <Link to={btnLink}>{btnText}</Link>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-container">
      <div className="row align-items-center">
        <div className="col">
          {heading && <h2>{heading}</h2>}
          {description && <p>{description}</p>}
          {btnText && <Link to={btnLink}>{btnText}</Link>}
        </div>
        <div className="col">{img && <img src={img} width="500" height="500" className="img-fluid" alt={heading} />}</div>
      </div>
    </div>
  );
};
export default Hero;
