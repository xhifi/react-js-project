function CallToAction(props) {
  const { title, description, btnRef, btnText } = props;

  return (
    <div className="container bg-warning mt-5 p-5">
      <h1>{title}</h1>
      <p>{description}</p>
      <a className="btn btn-lg btn-primary" href={btnRef}>
        {btnText}
      </a>
    </div>
  );
}
export default CallToAction;
