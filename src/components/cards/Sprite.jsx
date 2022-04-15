import { Link } from "react-router-dom";

const Sprite = ({ heading, description, btnText, btnLink, img, author, publishedAt }) => {
  return (
    <div className="sprite-card-col">
      <div className="card">
        <div className="sprite-image-holder">
          <div
            className="sprite-image rounded-circle"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
        </div>
        <div className="card-body text-center">
          <h3>{heading}</h3>
          <p className="mb-0">{description}</p>
          {btnLink && <Link to={btnLink}>{btnText}</Link>}
        </div>
        {author && (
          <div className="card-footer">
            <p className="mb-0">
              {author} | {publishedAt}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Sprite;
