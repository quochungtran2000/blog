import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { userApi } from "../api";
import { toast } from "react-toastify";
import { Roles } from "../application.constant";

type ContextValue = {
  user?: any;
  setUser: React.Dispatch<React.SetStateAction<any | undefined>>;
  getUser: () => Promise<any | undefined>;
  logout: () => void;
};
type User = {
  id: number;
  role: Roles;
};

export const UserContext = React.createContext<ContextValue>(null as any);

export const useUser = () => useContext(UserContext);

type Props = {
  children: React.ReactNode;
};

export function UserProvider(props: Props) {
  const [user, setUser] = useState<any | undefined>(() => {
    // Get token from localStorage
    const token = localStorage.getItem("token");

    // User is undefined if there's no token
    if (!token) return undefined;

    // Decode if there's token
    // const decoded: User = jwtDecode(token);

    // Set id and role as user data
    // => Will re-render routes and push to / (user role's homepage)
    return {
      id: 1,
      role: "user",
    } as User;
  });

  const history = useHistory();

  const getUser = async () => {
    try {
      const userData = await userApi.me();
      setUser(userData.data);
      return userData;
    } catch (error: any) {
      // Log error
      console.log("Get user error:", { error });

      // Toast error message
      toast.error(error.message);

      if (error?.response?.data?.statusCode === 401) {
        // Set user data to undefined
        // => Will auto re-render routes and push to / (login page)
        setUser(undefined);

        // Remove token from localStorage
        localStorage.removeItem("token");

        // Go back to / (login page)
        history.replace("/");
      }
    }
  };

  const logout = () => {
    // Set user data to undefined
    // => Will auto re-render routes and push to / (login page)
    setUser(undefined);

    // Remove token from localStorage
    localStorage.removeItem("token");

    // Toast success message
    toast.success("Đăng xuất thành công");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        getUser,
        setUser,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
