import { createContext, useContext } from "react";

const UserContext = createContext([]);
const LoggedInContext = createContext();
const BackendUrlContext = createContext();

export { UserContext, LoggedInContext, BackendUrlContext };
