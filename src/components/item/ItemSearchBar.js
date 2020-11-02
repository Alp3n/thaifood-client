import React, { useState } from 'react';
import { TextInput } from 'grommet';
import { Search } from 'grommet-icons';

const ItemSearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <TextInput
      icon={<Search pad='none' />}
      placeholder='Search'
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    />
  );
};
export default ItemSearchBar;
