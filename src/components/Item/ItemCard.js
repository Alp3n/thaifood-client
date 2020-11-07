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

const ItemCard = ({ item, size, onOpen, handleAllergens }) => {
  return (
    <Card
      key={item._id}
      onClick={() => onOpen(item._id)}
      round='xxsmall'
      elevation='small'
    >
      <Stack anchor='bottom-left'>
        <CardBody height={size !== 'small' ? 'medium' : 'small'} width='medium'>
          <Image fit='cover' src={item.image} />
        </CardBody>
        <CardHeader
          pad='small'
          background='#3b5249c4'
          width='medium'
          align='center'
        >
          <Box direction='column'>
            <Box direction='row' gap='small' align='center'>
              <Heading level='3' margin='none'>
                {item.names.en}
              </Heading>
              <Text size='small'>{item.names.pron}</Text>
            </Box>
            <Box>
              <Text size='small'>Allergens: {handleAllergens(item)}</Text>
            </Box>
          </Box>
        </CardHeader>
      </Stack>
    </Card>
  );
};
export default ItemCard;
