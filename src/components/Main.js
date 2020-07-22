import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import TopNews from './TopNews';
import AddNews from './AddNews';

const Main = () => (
  <div>
    <Switch>
      <Route path="/Home" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/AddedNews" component={AddNews} />
      <Route path="/TopNews" component={TopNews} />
      {/* <Route render={() => <Redirect to={{ pathname: '/home' }} />} /> */}
    </Switch>
  </div>
);

export default Main;
