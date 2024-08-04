import "bootstrap-icons/font/bootstrap-icons.css";
import DashboardLogo from "../assets/DashboardLogo.png";
import Profile from "../assets/Profile.png";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={DashboardLogo} alt="DashboardLogo" />
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
          </form>
          <ul className="navbar-nav  nav-hidden ms-auto mb-2 mb-lg-0 mx-5">
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                <i className="bi bi-envelope"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                <i className="bi bi-gear"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                <i className="bi bi-bell"></i>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className=" mx-2" href="#">
                <img src={Profile} alt="Profile Picture" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
