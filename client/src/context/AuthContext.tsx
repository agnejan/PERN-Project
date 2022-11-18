import { createContext, useState, ReactNode } from "react";
import { NullLiteral } from "typescript";

const backendUrl = "http://localhost:5000";

type User = { name: string; email?: string };

export type AuthContextValue = {
  user: User | null;
  register: (
    email: string,
    password: string,
    name: string
  ) => Promise<{ success: boolean; error: string }>;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error: string }>;
};

const initialAuth: AuthContextValue = {
  user: null,
  register: () => {
    throw new Error("register not implemented.");
  },
  login: () => {
    throw new Error("login not implemented.");
  },
};

//Create context

export const AuthContext = createContext<AuthContextValue>(initialAuth);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  //state
  const [user, setUser] = useState<User | null>(initialAuth.user);

  const register = async (
    email: string,
    password: string,
    nameForm: string
  ) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name: nameForm }),
    };
    const res = await fetch(`${backendUrl}/register`, options);
    const { success, error, jwt, name } = await res.json();
    localStorage.setItem("jwt", jwt);
    setUser({ ...user, name });
    return { success, error };
  };

  const login = async (email: string, password: string) => {
    console.log("email", email);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    const res = await fetch(`${backendUrl}/login`, options);
    const { success, token, error, name } = await res.json();
    localStorage.setItem("jwt", token);
    setUser({ ...user, name });
    return { success, error };
  };

  return (
    <AuthContext.Provider value={{ user, register, login }}>
      {" "}
      {children}
    </AuthContext.Provider>
  );
};
