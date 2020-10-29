import React, { useState, useContext } from 'react';

import { Box, ResponsiveContext, Text } from 'grommet';

//Items
import ItemTabs from '../components/item/ItemTabs';
// import ItemSearchBar from '../components/item/ItemSearchBar';
//Order
import OrderSidebar from '../components/order/OrderSidebar';
import OrderLayer from '../components/order/OrderLayer';

//Nav
import NavBar from '../components/nav/NavBar';
import BottomNavBar from '../components/nav/BottomNavBar';
import TopNavBar from '../components/nav/TopNavBar';

const Home = () => {
  const [user, setUser] = useState('hello');
  const size = useContext(ResponsiveContext);
  const [showSidebar, setShowSidebar] = useState(false);
  // const [orderCount, setOrderCount] = useState();
  // const [value, setValue] = useState([]);

  // const getValueFromForm = (someValue) => {
  //   setValue((value) => {
  //     return { ...value, someValue };
  //   });

  //   console.log(value);
  // };

  return (
    <Box fill>
      {size !== 'small' ? (
        <NavBar />
      ) : (
        <TopNavBar>
          {/* <ItemSearchBar /> */}
          <Text size='large'>Compose</Text>
        </TopNavBar>
      )}
      <Box direction='row' fill overflow={{ horizontal: 'hidden' }}>
        <Box
          flex='grow'
          background='accent-3'
          overflow={{ horizontal: 'hidden' }}
        >
          <ItemTabs
            orderCount={3}
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
          />
        </Box>
        {!showSidebar ||
          (!size !== 'small' && <OrderSidebar showSidebar={showSidebar} />)}
      </Box>
      {!showSidebar ||
        (size === 'small' && (
          <OrderLayer
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
        ))}
      {size === 'small' && user !== undefined && (
        <Box align='center'>
          <BottomNavBar />
        </Box>
      )}
    </Box>
  );
};

export default Home;
