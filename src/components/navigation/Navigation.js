import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <h1 className="nav--logo">Alonso</h1>
      <ul className="nav-items">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/articles">
            Articles
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
