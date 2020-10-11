import React, { useState } from 'react';

import { Box } from 'grommet';

import NavBar from '../components/NavBar';
import ItemTabs from '../components/Item/ItemTabs';
import OrderSidebar from '../components/Order/OrderSidebar';

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [orderCount, setOrderCount] = useState();
  const [value, setValue] = useState([]);

  const getValueFromForm = (someValue) => {
    setValue((value) => {
      return { ...value, someValue };
    });

    console.log(value);
  };

  return (
    <Box fill>
      <NavBar />
      <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
        <Box flex='grow' background='#eee' overflow={{ horizontal: 'hidden' }}>
          <ItemTabs
            orderCount={orderCount}
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
            getValueFromForm={getValueFromForm}
          />
        </Box>
        <OrderSidebar showSidebar={showSidebar} />
      </Box>
    </Box>
  );
};

export default Home;
