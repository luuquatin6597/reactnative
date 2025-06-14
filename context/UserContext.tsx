import { UserAction } from "@/actions/UserAction";
import { User } from "@/interface/User";
import { createContext } from "react";

const UserContext = createContext<{ users: User[]; dispatch: React.Dispatch<UserAction> }>({
    users: [],
    dispatch: () => { },
});

export { UserContext };
