import { Switch, Route } from "react-router";
import { Career, Home, NotFound, Post } from "./components/pages/public";
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

        <Route path={`/post/:id`}>
          <Post />
        </Route>

        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
