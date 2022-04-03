// HOW TO USE THIS COMPONENT
// Ref is a child link component, it asks for two parameters, one optional and the other mandatory.
// The optional argument is the $classes argument which demands just a basic string
// The mandatory argument is $options and it's of type object. It demands the following properties:
// - link: string
// - text: string

const Ref = (props) => {
  const { classes, options } = props;

  const checkReference = (arg) => {
    if (arg.slice(0, 1) === "/") {
      return;
    }
    return "_blank";
  };

  const morphedClasses = classes.toString();

  return (
    <a
      href={options.link}
      className={checkReference(options.link) ? "navigation-btn btn-danger " + morphedClasses : "navigation-btn btn-warning " + morphedClasses}
      target={checkReference(options.link)}
      rel={checkReference(options.link) ? "noreferrer" : ""}
    >
      {options.text}
    </a>
  );
};
export default Ref;
