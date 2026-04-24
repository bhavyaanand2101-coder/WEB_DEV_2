
import { Link, NavLink } from "react-router-dom";
function NavBar() {
  const Links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/login", title: "Login" },
    { path: "/users", title: "Users" },
  ];

  const ActiveStyle = { textDecoration: "none", color: "red" };
  const InActiveStyle = { textDecoration: "none", color: "blue" };
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {/* step -2  */}
      {/* {Links.map(({ path, title }) => {
        return <Link to={path}>{title}</Link>;
      })} */}

      {/* Step -3 */}
      {Links.map(({ path, title }) => {
        return (
          <NavLink
            key={path}
            style={({ isActive }) => {
              return isActive ? ActiveStyle : InActiveStyle;
            }}
            to={path}
          >
            {title}
          </NavLink>
        );
      })}

      {/* step -1 */}
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/users">Users</Link> */}
    </nav>
  );
}

export default NavBar;
