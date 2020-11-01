import React, { useContext } from 'react';
import {
  Box,
  Button,
  Form,
  FormField,
  Grid,
  Heading,
  Image,
  Layer,
  Select,
  Text,
} from 'grommet';
import { Close } from 'grommet-icons';
import { OrderContext } from '../../contexts/OrderContext';

const ItemForm = ({ item, open, onClose, handleAllergens }) => {
  const defaultValue = {
    meat: null,
    noodle: null,
    egg: null,
    spicy: null,
    additional: null,
    sweet: null,
    quantity: null,
  };

  // const onCloseReset = () => {
  //   onClose();
  //   // getValueFromForm(customValue);
  // };

  const { addToOrder } = useContext(OrderContext);

  return (
    <Box>
      {open && (
        <Layer position='center' onClickOutside={onClose} onEsc={onClose}>
          <Box pad='medium' width='large' align='start'>
            <Grid
              rows={['xxsmall', 'small', 'xxxsmall', 'medium', 'xsmall']}
              columns={['1/5', '4/5']}
              gap='small'
              areas={[
                ['header', 'header'],
                ['desc', 'image'],
                ['allergens', 'allergens'],
                ['form', 'form'],
                ['buttons', 'buttons'],
              ]}
            >
              <Box
                tag='header'
                direction='row'
                align='center'
                justify='between'
                gridArea='header'
              >
                <Heading level={3} margin='none'>
                  {item.names.en}
                </Heading>
                <Button icon={<Close />} onClick={onClose} />
              </Box>
              <Box gridArea='desc'>
                <Text>{item.desc}</Text>
              </Box>
              <Box gridArea='image' width='medium' height='small'>
                <Image fit='cover' src={item.image} />
              </Box>
              <Box gridArea='allergens'>
                <Text>List of allerges: {handleAllergens(item)}</Text>
              </Box>
              <Box gridArea='form'>
                <Form
                  onChange={(value) => console.log('Change', value)}
                  onReset={() => defaultValue}
                  onSubmit={({ value }) => {
                    addToOrder(value);
                    onClose();
                  }}
                >
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

                  <Box
                    direction='row'
                    gridArea='buttons'
                    align='center'
                    justify='between'
                  >
                    <Button type='reset' label='Reset' />
                    <Button type='submit' label='Add to Order' primary />
                  </Box>
                </Form>
              </Box>
            </Grid>
          </Box>
        </Layer>
      )}
    </Box>
  );
};

export default ItemForm;
