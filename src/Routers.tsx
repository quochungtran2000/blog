import { Switch, Route } from "react-router";
import Home from "./components/pages/public/Home";

export default function Routers() {
  return (
    <>
      <Switch>
        <Route path="/about">{/* <About /> */}</Route>
        <Route path="/users">{/* <Users /> */}</Route>
        <Route path="/"><Home/></Route>
      </Switch>
    </>
  );
}
