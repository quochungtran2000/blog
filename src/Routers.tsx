import { Switch, Route } from 'react-router';
import { Career, Home, NotFound, Post, Job, About, Contact } from './components/pages/public';
import CreatePost from './components/pages/user/CreatePost';

export default function Routers() {
  return (
    <>
      <Switch>
        <Route exact path="/career">
          <Career />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route path="/career/:id">
          <Job />
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

        <Route exact path={`/create-post`}>
          <CreatePost />
        </Route>

        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
