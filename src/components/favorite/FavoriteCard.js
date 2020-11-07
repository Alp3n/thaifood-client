import React, { useContext } from 'react';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  List,
  ResponsiveContext,
} from 'grommet';

import { Trash } from 'grommet-icons';

const FavoriteCard = ({ favorite, onOpen }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Card
      key={favorite.id}
      onClick={() => onOpen(favorite._id)}
      round='xxsmall'
      elevation='small'
    >
      <CardHeader
        pad='small'
        background='#3b5249c4'
        width='medium'
        direction='row'
        justify='between'
        align='center'
      >
        <Heading level='3' margin='small'>
          {favorite.title}
        </Heading>
        <Button icon={<Trash />} />
      </CardHeader>

      <CardBody
        height={size !== 'small' ? 'medium' : 'small'}
        width='medium'
        background='#eee'
      >
        <List data={favorite.items.map((item) => item.en)}></List>
      </CardBody>
    </Card>
  );
};

export default FavoriteCard;
