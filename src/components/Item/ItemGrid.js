import React, { useContext, useState, useEffect } from 'react';
import Axios from 'axios';
import { Box, Grid, InfiniteScroll, ResponsiveContext } from 'grommet';
import ItemCard from './ItemCard';
import ItemForm from './ItemForm';
import ItemFormLayer from './ItemFormLayer';

const ItemGrid = ({ type }) => {
  //API URL call for the fetch
  const url = 'http://localhost:9000/items';

  //Getting size parameter for responsiveness
  const size = useContext(ResponsiveContext);
  // const size = 'large';

  //Holding fetched items data in items state array
  const [items, setItems] = useState([]);
  //State to handle form modal/layer
  const [open, setOpen] = useState(false);
  //State to select specific item from the grid
  const [selectedId, setSelectedId] = useState();

  //GET axios call to fetch items data
  const fetchData = async () => {
    try {
      const response = await Axios.get(url);
      const newData = response.data.items;
      setItems(...items, newData);
    } catch (err) {
      console.error(err);
    }
  };

  //Fetch on the component mount
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Filtering data by its type to show in specific tab
  const filteredData = items.filter((item) => item.type === `${type}`);

  //Handling opening of the modal/layer
  const onOpen = (id) => {
    setSelectedId(id);
    setOpen(true);
  };
  //Handling closing of the modal/layer
  const onClose = () => {
    setOpen(false);
  };

  //Getting ID of the selected item
  const selectedItem = filteredData.find((item) => item._id === selectedId);

  //Handling array of the allergens to show in the ItemCard/ItemForm/ItemFormLayer
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
        {/*Here I used infinity scroll */}
        {/* <InfiniteScroll items={filteredData}>
          {(item) =>
            ItemCard({ item, onOpen, handleAllergens }, console.log(item._id))
          }
        </InfiniteScroll> */}

        {/*Changed it to simple map() because InfinityScroll rendered many times same item */}
        {filteredData.map((item) =>
          ItemCard(
            { item, size, onOpen, handleAllergens },
            console.log('why?', item._id)
          )
        )}
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
