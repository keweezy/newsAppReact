import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import TopNews from './TopNews';
import AddNews from './AddNews';

const Main = ({ addedNews }) => {
  return (
    <div>
      <Switch>
        {/* <Route path="/Home" component={() => <Home addedNews={addedNews} />} /> */}
        <Route
          path="/Home"
          render={(props) => <Home {...props} addedNews={addedNews} />}
        />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route
          path="/Added News"
          render={(props) => <AddNews {...props} addedNews={addedNews} />}
        />
        <Route path="/Top News" component={TopNews} />
        <Route render={() => <Redirect to={{ pathname: '/Home' }} />} />
      </Switch>
    </div>
  );
};

export default Main;
