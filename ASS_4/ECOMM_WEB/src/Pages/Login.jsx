import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login, signup, googleLogin } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      isSignup ? await signup(email, pass) : await login(email, pass);
    } catch (err) { alert(err.message); }
  };

  return (
    <div className="auth-screen">
      <div className="auth-box">
        <h2>{isSignup ? "Join Us" : "Welcome Back"}</h2>
        <form onSubmit={handleSubmit}>
          <input className="auth-input" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
          <input className="auth-input" type="password" placeholder="Password" onChange={e => setPass(e.target.value)} required />
          <button type="submit" className="btn btn-primary">{isSignup ? "Create Account" : "Login"}</button>
        </form>
        <p style={{margin: '15px 0', fontSize: '12px', color: 'gray'}}>OR</p>
        <button onClick={googleLogin} className="btn" style={{width: '100%', background: 'white', border: '1px solid #ddd', color: '#444'}}>
          Continue with Google
        </button>
        <p className="toggle-text" onClick={() => setIsSignup(!isSignup)} style={{marginTop: '20px', cursor: 'pointer', color: 'var(--primary)'}}>
          {isSignup ? "Have an account? Login" : "New here? Create Account"}
        </p>
      </div>
    </div>
  );
}