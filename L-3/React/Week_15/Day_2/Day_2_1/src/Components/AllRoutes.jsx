import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home";
export default function AllRoutes() {
    return( 
    <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/login" element={<Login/>} />
        <Route path= "/about" element={<About/>} />
        <Route path= "/logout" element={<Logout/>} />
        <Route path= "/user" element={<User/>} />
        <Route path= "/student" element={<Student/>} />  
    </Routes>
    );
}

