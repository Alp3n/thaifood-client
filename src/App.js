import React from 'react';

import { Grommet, Box, Text } from 'grommet';
import myTheme from './myTheme';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Admin from './pages/Admin';
import Favorites from './pages/Favorites';
import Guide from './pages/Guide';

import OrderContextProvider from './contexts/OrderContext';

function App() {
  return (
    <Grommet theme={myTheme} full>
      <Switch>
        <OrderContextProvider>
          <Route path='/' component={Home} exact />
        </OrderContextProvider>
        <Route path='/about' component={About} exact />
        <Route path='/favorites' component={Favorites} exact />
        <Route path='/guide' component={Guide} exact />
        <Route path='/sign-in' component={SignIn} exact />
        <Route path='/sign-up' component={SignUp} exact />
        <Route path='/admin' component={Admin} exact />

        <Route path='*' component={() => '404 NOT FOUND'} />
      </Switch>
    </Grommet>
  );
}

export default App;
