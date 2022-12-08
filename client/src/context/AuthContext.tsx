import { createContext, useState, ReactNode, useEffect } from "react";
import { NullLiteral } from "typescript";

const backendUrl = "http://localhost:5000";

type User = { name: string; email?: string; id: number; picture: string };

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
  logout: () => void;
};

const initialAuth: AuthContextValue = {
  user: null,
  register: () => {
    throw new Error("register not implemented");
  },
  login: () => {
    throw new Error("login not implemented");
  },
  logout: () => {
    throw new Error("logout not done");
  },
};

//Create context

export const AuthContext = createContext<AuthContextValue>(initialAuth);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  //state
  const [user, setUser] = useState<User | null>(initialAuth.user);

  // use Effect to get Profile info from the token when the app is refreshed
  useEffect(() => {
    // console.log("useEffect getProfile has run");
    getProfile();
  }, []);

  const getProfile = async () => {
    const jwt = localStorage.getItem("jwt"); // *** do an if if the token doesnt exist
    if (!jwt) {
      console.log("JWT token does not exist");
    }
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    };
    const res = await fetch(`${backendUrl}/profile`, options);
    const user = (await res.json()) as User;
    // console.log("user", user);
    setUser(user);
    console.log(user)
  };

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
    if (success) {
      localStorage.setItem("jwt", jwt); // here setting the token in local storage
      getProfile();
    }
    // setUser({ ...user, name }); // this means we take the user object and overwrrite the name property - called object spread
    return { success, error, name };
  };

  const login = async (email: string, password: string) => {
    // console.log("email", email);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    const res = await fetch(`${backendUrl}/login`, options);
    const { success, token, error } = await res.json(); // *** here add aslo if (success) and if (error) handling
    if (success) {
      localStorage.setItem("jwt", token); // here setting the token in local storage
      getProfile();
    } else if (error) {
      console.log("log in error", error);
    }
    // setUser({ ...user, name }); // what are we doing here? Lucas
    // console.log("user", user); // why is user not recognised? Lucas
    return { success, error };
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {" "}
      {children}
    </AuthContext.Provider>
  );
};
