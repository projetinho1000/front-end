import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";
import { auth } from "service/firebase";
import React, { createContext, useContext, useEffect, useState } from "react";

interface PropsAuthContext {
  signInWithGoogle: () => Promise<void>;
  user: User | null;
  signOut: () => void;
}

const AuthContext = createContext({} as PropsAuthContext);
export const AuthContextrovider: React.FC = (props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userStorage = localStorage.getItem("user");

    if (userStorage) {
      setUser(JSON.parse(userStorage));
    }
  }, []);
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    const response = await signInWithPopup(auth, provider);
    setUser(response.user);
    console.log(response.user.toJSON());
    localStorage.setItem("user", JSON.stringify(response.user.toJSON()));
  }
  function signOut() {
    localStorage.clear();
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{ signInWithGoogle, user, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const contexto = useContext(AuthContext);

  return contexto;
}
