function Navigation() {
  return (
    <nav>
      <ul className="list-unstyled d-flex flex-row">
        <li>
          <a href="/" className="p-2 bg-primary text-white text-decoration-none me-2">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="p-2 bg-primary text-white text-decoration-none me-2">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="p-2 bg-primary text-white text-decoration-none">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
