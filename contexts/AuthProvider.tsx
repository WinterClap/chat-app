import React from "react";
type User = { name: string } | null;
type Values = { currentUser: User; login: () => void; logout: () => void };
const AuthContext = React.createContext<Values>({ currentUser: null, login: () => {}, logout: () => {} });

interface Props {}

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState<User>(null);

  const login = () => {
    const fakeUser: User = {
      name: "Peter",
    };
    setCurrentUser(fakeUser);
    console.log("Logging in");
  };
  const logout = () => {
    setCurrentUser(null);
    console.log("Logout: ", currentUser);
  };
  const values = { currentUser, login, logout };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
