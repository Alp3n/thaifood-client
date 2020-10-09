import React from "react";
import { Box, Button, Stack, Text } from "grommet";
import { List } from "grommet-icons";

const YourOrderButton = ({ orderCount, showSidebar, setShowSidebar }) => {
  return (
    <Box pad="small">
      <Stack anchor="bottom-right">
        <Button
          primary
          size="large"
          label="Your order"
          icon={<List />}
          onClick={() => setShowSidebar(!showSidebar)}
        />
        {orderCount !== 0 ? (
          <Box background="#ff7e67" pad={{ horizontal: "xsmall" }} round>
            <Text>{orderCount}</Text>
          </Box>
        ) : null}
      </Stack>
    </Box>
  );
};

export default YourOrderButton;
