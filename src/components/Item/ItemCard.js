import React from 'react';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Stack,
  Text,
} from 'grommet';

const ItemCard = ({ item }) => (
  <Card height='medium' width='medium' onClick>
    <Stack anchor='bottom-left'>
      <CardBody height='medium'>
        <Image fit='cover' src={item.image} />
      </CardBody>
      <CardHeader
        pad={{ horizontal: 'small', vertical: 'small' }}
        background='#3b5249c4'
        width='medium'
        justify='start'
      >
        <Box>
          <Heading level='3' margin='none'>
            {item.itemName}
          </Heading>
          <Text size='small'>{item.allergens}</Text>
        </Box>
      </CardHeader>
    </Stack>
  </Card>
);
export default ItemCard;
