import { Header } from "../header";
import { SideBar } from "../sideBar";
import { SMain } from "./Layout.styled";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <>
      <Header></Header>
      <SideBar></SideBar>
      <SMain>{props.children}</SMain>
    </>
  );
}
