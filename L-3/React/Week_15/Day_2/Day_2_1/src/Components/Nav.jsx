import { Link, NavLink } from "react-router-dom";

export default function Nav() {
    const isActiveStyle={textDecoration: "none", color: "red"};
    const isNotActiveStyle={textDecoration: "none", color: "black"};
    const Links= [{
        path: "/",
        title: "Home"
    },
    {
        path: "/login",
        title: "Login"
    },
    {
        path: "/about",
        title: "About"
    },
    {
        path: "/logout",
        title: "Logout"
    },
    {
        path: "/user",
        title: "User"
    },
    {
        path: "/student",
        title: "Students"
    }]
    return (
        <diV style={{ display: "flex", gap: "20px", justifyContent: "space-around", backgroundColor: "White", color: "white", padding: "10px" }}>
            {/* <h1><Link to="/">Home</Link></h1>
            <h1><Link to="/login">login</Link></h1>
            <h1><Link to="/about">about </Link></h1>
            <h1><Link to="/logout">logout</Link></h1>
            <h1><Link to="/user">user</Link></h1>
            <h1><Link to="/student">Students</Link></h1> */}
            {/* Method_2 */}
            {/* {Links.map((link) => (
                <Link to={link.path}>{link.title}</Link>
            ))} */}

            {/* Method_3 */}
            {Links.map((link) => (
                <NavLink to={link.path} style={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}>
                    {link.title}
                </NavLink>
            ))}
        </diV>
    );
}
