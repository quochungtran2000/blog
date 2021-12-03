import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import authApi from "../api/authApi";
import { IUser } from "../utils/interface";

type ContextValue = {
  user?: IUser;
  setToken: (data: string) => void;
  logout: () => void;
};

export const UserContext = React.createContext<ContextValue>(null as any);

export const useUser = () => useContext(UserContext);

type Props = {
  children: React.ReactNode;
};

export function UserProvider(props: Props) {
  const [user, setUser] = useState<any | undefined>(undefined);

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const history = useHistory();

  useEffect(() => {
    if (!token) {
      return setUser(null);
    }
    const fetchUser = async () => {
      const data = await authApi.me().catch((err) => {
        console.log(err);
        setUser(undefined);

        // Remove token from localStorage
        localStorage.removeItem("token");

        // Go back to / (login page)
        history.replace("/");
      });
      setUser(data);
    };
    fetchUser();
    // eslint-disable-next-line
  }, [token]);

  // const getUser = async () => {
  //   try {
  //     const userData = await userApi.me();
  //     setUser(userData.data);
  //     return userData;
  //   } catch (error: any) {
  //     // Log error
  //     console.log("Get user error:", { error });

  //     // Toast error message
  //     toast.error(error.message);

  //     if (error?.response?.data?.statusCode === 401) {
  //       // Set user data to undefined
  //       // => Will auto re-render routes and push to / (login page)
  //       setUser(undefined);

  //       // Remove token from localStorage
  //       localStorage.removeItem("token");

  //       // Go back to / (login page)
  //       history.replace("/");
  //     }
  //   }
  // };

  const handleSetToken = (data: string) => {
    setToken(data);
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
        setToken: handleSetToken,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
