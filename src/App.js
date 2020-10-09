import React, { useState } from 'react';

import { Grommet, Box, Anchor, Button, ResponsiveContext } from 'grommet';
import myTheme from './myTheme';

import NavBar from './components/NavBar';
import ItemTabs from './components/Item/ItemTabs';
import OrderSidebar from './components/Order/OrderSidebar';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [orderCount, setOrderCount] = useState();

  return (
    <Grommet theme={myTheme} themeMode='dark' full>
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
            <ItemTabs
              orderCount={orderCount}
              setShowSidebar={setShowSidebar}
              showSidebar={showSidebar}/>
          </Box>
          <OrderSidebar showSidebar={showSidebar} />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
