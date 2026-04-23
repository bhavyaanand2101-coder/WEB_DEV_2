import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // SIGNUP
  const signup = async (email, password, role = "user") => {
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    setUser({ ...res.user, role });
  };

  // LOGIN
  const login = async (email, password) => {
    const res = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    setUser({ ...res.user, role: "user" });
  };

  // LOGOUT
  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  // KEEP USER LOGGED IN
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signup, login, logout }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);