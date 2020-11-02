import React, { useContext, useState, useEffect } from 'react';
import Axios from 'axios';
import { Box, Grid, InfiniteScroll, ResponsiveContext } from 'grommet';
import ItemCard from './ItemCard';
import ItemForm from './ItemForm';
import ItemFormLayer from './ItemFormLayer';

const ItemGrid = ({ type }) => {
  const url = 'http://localhost:9000/items';

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const response = await Axios.get(url);
      const newData = response.data.items;
      setItems(...items, newData);
      // console.log(items);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredData = items.filter((item) => item.type === `${type}`);

  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();

  const onOpen = (id) => {
    setSelectedId(id);
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // const selectedItem = filteredData.filter((item) => item._id === selectedId);
  const selectedItem = filteredData.find((item) => item._id === selectedId);
  const size = useContext(ResponsiveContext);

  const handleAllergens = (item) => {
    if (item.allergens[0] !== null) {
      return item.allergens.join(', ');
    } else {
      return 'None';
    }
  };

  return (
    <Box
      fill
      overflow='auto'
      // margin={size === 'small' ? { bottom: 'xlarge' } : undefined}
    >
      <Grid
        justifyContent={size === 'small' ? 'center' : 'between'}
        gap={size !== 'small' ? 'medium' : 'small'}
        rows={size !== 'small' ? 'medium' : 'small'}
        columns={{ count: 'fill', size: ['small', 'medium'] }}
        pad='large'
        margin={
          size === 'small' ? { top: 'none', bottom: 'xlarge' } : undefined
        }
      >
        <InfiniteScroll items={filteredData}>
          {(item) => ItemCard({ item, onOpen, handleAllergens })}
        </InfiniteScroll>
      </Grid>
      {size !== 'small' ? (
        <ItemForm
          item={selectedItem}
          open={open}
          onClose={onClose}
          handleAllergens={handleAllergens}
        />
      ) : (
        <ItemFormLayer
          item={selectedItem}
          open={open}
          onClose={onClose}
          handleAllergens={handleAllergens}
        />
      )}
    </Box>
  );
};

export default ItemGrid;
