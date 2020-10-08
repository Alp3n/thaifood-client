import React, { useState } from 'react';

import { Grommet, Box, Anchor, Button } from 'grommet';
import myTheme from './myTheme';

import NavBar from './components/NavBar';
import ItemTabs from './components/Item/ItemTabs';
import OrderSidebar from './components/Order/OrderSidebar';
import YourOrderButton from './components/Order/YourOrderButton';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={myTheme} themeMode='dark' full>
      <ResponsiveContext.Consumer>
      <Box fill>
        <NavBar>
          <Anchor>
            <Button plain color='white' label='Home' />
          </Anchor>
          <Anchor>
            <Button plain color='white' label='About' />
          </Anchor>
          <Anchor>
            <Button plain color='white' label='Sign In' />
          </Anchor>
          <Anchor>
            <Button primary color='white' label='Sign Up' />
          </Anchor>
        </NavBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box
            flex='grow'
            background='#eee'
            overflow={{ horizontal: 'hidden' }}
          >
            <ItemTabs />
            <YourOrderButton
              margin-left='small'
              orderCount='3'
              setShowSidebar={setShowSidebar}
              showSidebar={showSidebar}
            />
          </Box>

          <OrderSidebar showSidebar={showSidebar} />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
