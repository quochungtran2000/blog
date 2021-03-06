import { Switch, Route } from 'react-router';
import { DashBoardCity, DashBoardCustomer, DashBoardDistrict, DashBoardJobs, DashBoardWard } from './components/Dashboard';
import Dashboard from './components/Dashboard/DashBoard';
import { CreateJob } from './components/pages/hr';
import MyJob from './components/pages/hr/MyJob';
import { Career, Home, NotFound, Post, Job, About, Contact } from './components/pages/public';
import ChangePassword from './components/pages/user/ChangePassword';
import CreatePost from './components/pages/user/CreatePost';
import MyPost from './components/pages/user/MyPost';
import Profile from './components/pages/user/Profile';
import UpdatePost from './components/pages/user/UpdatePost';

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

        <Route exact path={`/update-post/:id`}>
          <UpdatePost />
        </Route>

        <Route exact path={`/create-job`}>
          <CreateJob />
        </Route>

        <Route exact path={`/update-job/:id`}>
          <UpdatePost />
        </Route>

        <Route exact path={`/my-post`}>
          <MyPost />
        </Route>

        <Route exact path={`/my-job`}>
          <MyJob />
        </Route>

        <Route exact path={`/my-profile`}>
          <Profile />
        </Route>

        <Route exact path={`/change-password`}>
          <ChangePassword />
        </Route>



        <Route exact path={`/dashboard`}>
          <Dashboard />
        </Route>
        <Route exact path={`/dashboard/city`}>
          <DashBoardCity />
        </Route>
        <Route exact path={`/dashboard/district`}>
          <DashBoardDistrict />
        </Route>
        <Route exact path={`/dashboard/ward`}>
          <DashBoardWard />
        </Route>
        <Route exact path={`/dashboard/customer`}>
          <DashBoardCustomer />
        </Route>
        <Route exact path={`/dashboard/job`}>
          <DashBoardJobs />
        </Route>

        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
