import { NavLink } from "react-router-dom";
const navmenu = [
    { path: "/", label: "Home" },
    { path: "/posts", label: "Elenco post" },
    { path: "/aboutus", label: "About us" },
  ];

  function HeaderComponent() {
    function drawMenu() {
      return navmenu.map((item) => (
        <li className="nav-item" key={item.path}>
          <NavLink
            className="nav-link"
            to={item.path}
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            {item.label}
          </NavLink>
        </li>
      ));
    }
    return (
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              MyLogo
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">{drawMenu()}</ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  
  export default HeaderComponent;