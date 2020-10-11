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

const ItemCard = ({ item, onOpen }) => {
  return (
    <Card
      key={item._id}
      height='medium'
      width='medium'
      onClick={() => onOpen(item._id)}
      round='xsmall'
    >
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
              {item.names.en}
            </Heading>
            <Text size='small'>Allergens: {item.allergens.join(', ')}</Text>
          </Box>
        </CardHeader>
      </Stack>
    </Card>
  );
};
export default ItemCard;
