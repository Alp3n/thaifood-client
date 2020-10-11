import React from 'react';

import { Grommet } from 'grommet';
import myTheme from './myTheme';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Admin from './pages/Admin';

function App() {
  return (
    <Grommet theme={myTheme} themeMode='dark' full>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/admin' component={Admin} />
      </Switch>
    </Grommet>
  );
}

export default App;
