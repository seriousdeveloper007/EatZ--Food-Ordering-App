import { createContext } from "react";

const userContext = createContext({
    loggedUser : "Default User",
});

export default userContext;