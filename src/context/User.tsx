import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import authApi from "../api/authApi";
import { IUser } from "../utils/interface";
import jwtDecode from "jwt-decode";

type ContextValue = {
  user?: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  getUser: () => Promise<IUser | undefined>;
  logout: () => void;
};

export const UserContext = React.createContext<ContextValue>(null as any);

export const useUser = () => useContext(UserContext);

type Props = {
  children: React.ReactNode;
};

export function UserProvider(props: Props) {
  const [user, setUser] = useState<IUser | undefined>(() => {
    // Get token from localStorage
    const token = localStorage.getItem("token");

    // User is undefined if there's no token
    if (!token) return undefined;

    // Decode if there's token
    const decoded: IUser = jwtDecode(token.replace("Bearer ", ""));

    // Set id and role as user data
    // => Will re-render routes and push to / (user role's homepage)
    return decoded;
  });

  const history = useHistory();

  const getUser = async () => {
    try {
      const userData = await authApi.me();
      setUser(userData);
      return userData;
    } catch (error: any) {
      // Toast error message
      toast.error(error.message);

      if (error?.response?.status === 401) {
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
        logout,
        setUser,
        getUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
