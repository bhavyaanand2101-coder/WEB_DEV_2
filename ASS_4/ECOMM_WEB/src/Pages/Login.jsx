import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");

  const handle = () => {
    login(email, pass);
    navigate("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Password" onChange={e=>setPass(e.target.value)} /><br/>

      <button onClick={handle}>Login</button>
    </div>
  );
}