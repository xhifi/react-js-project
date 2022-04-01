function Hero(props) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col bg-primary">
          <h1>{props.heading}</h1>
          <p>{props.description}</p>
          <a className="btn btn-info btn-lg" href={props.btnRef}>
            {props.btnText}
          </a>
        </div>
        <div className="col bg-danger">
          <img src={props.img} width={500} height={500} alt={props.imgAlt} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
