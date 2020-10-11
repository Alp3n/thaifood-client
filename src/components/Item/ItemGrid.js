import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Box, Grid, InfiniteScroll } from 'grommet';
import ItemCard from './ItemCard';
import ItemForm from './ItemForm';

// import data from '../../data';

const ItemGrid = ({ type, getValueFromForm }) => {
  const url = 'http://localhost:9000/items';

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await Axios.get(url);
      const newData = response.data.items;
      setItems(...items, newData);
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

  return (
    <Box fill pad='large'>
      <Grid
        gap='xlarge'
        rows='medium'
        columns={{ count: 'fit', size: ['medium', 'medium'] }}
      >
        <InfiniteScroll items={filteredData}>
          {(item) => ItemCard({ item, onOpen })}
        </InfiniteScroll>
      </Grid>
      <ItemForm
        item={selectedItem}
        open={open}
        onClose={onClose}
        getValueFromForm={getValueFromForm}
      />
    </Box>
  );
};

export default ItemGrid;
