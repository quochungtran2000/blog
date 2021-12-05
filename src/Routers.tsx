import { Switch, Route } from "react-router";
import { About, Career, Home, NotFound } from "./components/pages/public";
import Contact from "./components/pages/public/Contact";

export default function Routers() {
  return (
    <>
      <Switch>
        <Route exact path="/career">
          <Career />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
