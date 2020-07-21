import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import Register from './Register.js';
import TopNews from './TopNews';

const Main = () => (
    <div>
        <Switch>
            <Route path='/Home' component={Home} />
            <Route path='/Login' component={Login} />
            <Route path='/Register' component={Register} />
            <Route path='/TopNews' component={TopNews} />
        </Switch>
    </div>
)

export default Main;