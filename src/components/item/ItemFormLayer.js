import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import {
  Box,
  Button,
  Form,
  FormField,
  Image,
  Layer,
  Select,
  Text,
} from 'grommet';
import { Close } from 'grommet-icons';
import { OrderContext } from '../../contexts/OrderContext';

const StyledButtonBar = styled(Box)`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  height: auto;
  width: 100%;
`;

const ItemFormLayer = ({ item, open, onClose, handleAllergens }) => {
  const defaultValue = {};
  const { addToOrder } = useContext(OrderContext);
  const [value, setValue] = useState(defaultValue);

  const formatObject = (formValue) => {
    let object = { ...formValue, name: item.names.en };
    return object;
  };

  return (
    <Box>
      {open && (
        <Layer
          position='bottom'
          onClickOutside={onClose}
          onEsc={onClose}
          margin={{ top: '50px' }}
        >
          <Box width='large' align='start'>
            <Box elevation='small' fill='horizontal' background='#eee'>
              <Box
                tag='header'
                direction='row'
                align='center'
                justify='between'
                pad='small'
                background='brand'
              >
                <Box direction='row' align='center' gap='medium' pad='medium'>
                  <Text size='large'>{item.names.en}</Text>
                  <Text color='light-4'>{item.names.pron}</Text>
                </Box>
                <Button
                  icon={<Close color='status-critical' />}
                  onClick={onClose}
                />
              </Box>
              <Box height='small'>
                <Image fit='cover' src={item.image} />
              </Box>
              <Box pad='medium'>
                <Text>{item.desc}</Text>
              </Box>
              <Box pad='medium'>
                <Text>Allerges: {handleAllergens(item)}</Text>
              </Box>
            </Box>
            <Box overflow='auto' fill='horizontal'>
              <Form
                value={value}
                onChange={(nextValue) => {
                  console.log('Change', nextValue);
                  setValue(nextValue);
                }}
                onReset={() => setValue(defaultValue)}
                onSubmit={({ value }) => {
                  addToOrder(formatObject(value));
                  onClose();
                }}
              >
                <Box pad={{ bottom: '50px' }}>
                  {item.meats.length > 0 && (
                    <FormField
                      component={Select}
                      label='Meat'
                      options={item.meats.map((meat) => meat.en)}
                      placeholder='Select type of meat'
                      name='meat'
                      required
                    />
                  )}

                  {item.sweet && (
                    <FormField
                      component={Select}
                      label='Sweetness'
                      options={[
                        'Not Sweet',
                        'Little Sweet',
                        'Sweet',
                        'Very Sweet',
                      ]}
                      placeholder='Select level of sweetness'
                      name='sweet'
                      required
                    />
                  )}

                  {item.egg && (
                    <FormField
                      component={Select}
                      label='Egg'
                      options={['None', 'Fried', 'Omlet']}
                      name='egg'
                      placeholder='Select egg option'
                      required
                    />
                  )}
                  {item.type === 'noodles' && (
                    <FormField
                      component={Select}
                      label='Noodles'
                      options={['Thin', 'Wide', 'Something', 'Something']}
                      placeholder='Select type of noodles'
                      name='noodle'
                      required
                    />
                  )}

                  {item.spicy && (
                    <FormField
                      component={Select}
                      label='Spiciness'
                      options={[
                        'Not Spicy',
                        'Little Spicy',
                        'Spicy',
                        'Very Spicy',
                      ]}
                      name='spicy'
                      placeholder='Select level of spiciness'
                      required
                    />
                  )}
                  <FormField
                    component={Select}
                    label='Additional'
                    options={['None', 'Something']}
                    name='additional'
                    placeholder='Select any additional info'
                    required
                  />
                </Box>
                <StyledButtonBar
                  align='center'
                  direction='row'
                  background='#eee'
                  pad='small'
                  justify='between'
                  elevation='upper'
                >
                  <Button type='reset' label='Reset' />
                  <Button type='submit' label='Add to Order' primary />
                </StyledButtonBar>
              </Form>
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
};

export default ItemFormLayer;
