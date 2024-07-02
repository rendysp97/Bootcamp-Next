const { useQueries } = require("@/hooks/useQueries");
const { createContext } = require("react");

import Cookies from "js-cookie";

export const UserContext = createContext();

export function UserContextProvider({ children, ...props }) {
  const { data } = useQueries({
    prefixUrl: "https://service.pace-unv.cloud/api/user/me",
    headers: {
      "Authorization":`Bearer ${Cookies.get("token")}`,
    },
  });

  return (
    <UserContext.Provider value={data?.data || null} {...props}>
      {children}
    </UserContext.Provider>
  );
}
