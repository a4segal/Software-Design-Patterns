import React from "react";

// Stateless Functional Component
const NavBar = () => {
  const getCurrentDate = () => new Date().toLocaleDateString();
  const [currentDate, setCurrentDate] = React.useState(getCurrentDate());

  React.useEffect(() => {
    const intervalID = setInterval(
      () => setCurrentDate(getCurrentDate()),
      3600000
    );
    return () => {
      clearInterval(intervalID);
    };
  });

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a
        className="navbar-brand"
        href="https://en.wikipedia.org/wiki/Software_design_pattern"
        target="_blank"
        rel="noreferrer"
      >
        Software Design Patterns
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://en.wikipedia.org/wiki/Behavioral_pattern"
              target="_blank"
              rel="noreferrer"
            >
              Behavioral
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://en.wikipedia.org/wiki/Creational_pattern"
              target="_blank"
              rel="noreferrer"
            >
              Creational
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://en.wikipedia.org/wiki/Structural_pattern"
              target="_blank"
              rel="noreferrer"
            >
              Structural
            </a>
          </li>
        </ul>
      </div>

      <div className="ml-auto font-weight-light text-info" title="Current Date">
        {currentDate}
      </div>
    </nav>
  );
};

export default NavBar;
