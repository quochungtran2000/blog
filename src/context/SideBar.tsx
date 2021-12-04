import React, { useContext, useState } from "react";

type ContextValue = {
  open: boolean;
  setOpen: () => void;
};

export const SideBarContext = React.createContext<ContextValue>(null as any);

type Props = {
  children: React.ReactNode;
};

export function SideBarProvider(props: Props) {
  const [open, setOpen] = useState(true);
  const onClick = () => setOpen(!open);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  return (
    <SideBarContext.Provider
      value={{
        open,
        setOpen: onClick,
      }}
    >
      {props.children}
    </SideBarContext.Provider>
  );
}

export const useSideBar = () => useContext(SideBarContext);
