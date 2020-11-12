import React, { useContext, useState } from 'react';
import {
  Box,
  Button,
  Form,
  FormField,
  Grid,
  Heading,
  Image,
  Layer,
  ResponsiveContext,
  Select,
  Text,
} from 'grommet';
import { Close } from 'grommet-icons';
import { OrderContext } from '../../contexts/OrderContext';

const ItemForm = ({ item, open, onClose, handleAllergens }) => {
  // const onCloseReset = () => {
  //   onClose();
  //   // getValueFromForm(customValue);
  // };
  const defaultValue = {};
  const size = useContext(ResponsiveContext);
  const { addToOrder } = useContext(OrderContext);
  const [value, setValue] = useState(defaultValue);

  const rowsDesktop = ['xxsmall', 'small', 'xxxsmall', 'medium', 'xsmall'];
  const rowsMobile = [
    'xxsmall',
    'small',
    'xxxsmall',
    'xxxsmall',
    'medium',
    'xsmall',
  ];

  const columnsDesktop = ['1/5', '4/5'];
  const columnsMobile = ['100%'];

  const areasDesktop = [
    ['header', 'header'],
    ['desc', 'image'],
    ['allergens', 'allergens'],
    ['form', 'form'],
    ['buttons', 'buttons'],
  ];

  const areasMobile = [
    ['header'],
    ['image'],
    ['desc'],
    ['allergens'],
    ['form'],
    // ['buttons']
  ];

  return (
    <Box>
      {open && (
        <Layer position='center' onClickOutside={onClose} onEsc={onClose}>
          <Box pad='medium' width='large' align='start'>
            <Grid
              areas={size !== 'small' ? areasDesktop : areasMobile}
              rows={size !== 'small' ? rowsDesktop : rowsMobile}
              columns={size !== 'small' ? columnsDesktop : columnsMobile}
              gap='xsmall'
              fill={size === 'small' ? 'true' : null}
            >
              <Box
                tag='header'
                direction='row'
                align='center'
                justify='between'
                gridArea='header'
              >
                <Box direction='row' gap='medium'>
                  <Heading level={3} margin='none'>
                    {item.names.en}
                  </Heading>
                  <Text>{item.names.pron}</Text>
                </Box>

                <Button
                  icon={<Close color='status-critical' />}
                  onClick={onClose}
                />
              </Box>
              <Box gridArea='desc'>
                <Text>{item.desc}</Text>
              </Box>
              <Box gridArea='image' width='medium' height='small'>
                <Image fit='cover' src={item.image} />
              </Box>
              <Box gridArea='allergens'>
                <Text>Allerges: {handleAllergens(item)}</Text>
              </Box>
              <Box gridArea='form' overflow='auto'>
                <Form
                  value={value}
                  onChange={(nextValue) => {
                    console.log('Change', nextValue);
                    setValue(nextValue);
                  }}
                  onReset={() => setValue(defaultValue)}
                  onSubmit={({ value }) => {
                    addToOrder(value);
                    onClose();
                  }}
                >
                  {item?.meats.length > 0 && (
                    <FormField
                      component={Select}
                      label='Meat'
                      options={item.meats.map((meat) => meat.en)}
                      placeholder='Select type of meat'
                      name='meat'
                      required
                    />
                  )}

                  {item?.egg && (
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

                  {item?.spicy && (
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

                  {item?.sweet && (
                    <FormField
                      component={Select}
                      label='Sweetness'
                      options={[
                        'Not Sweet',
                        'Little Sweet',
                        'Sweet',
                        'Very Sweet',
                      ]}
                      name='sweet'
                      placeholder='Select level of sweetness'
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
                    // gridArea='buttons'
                    align='center'
                    justify='between'
                    overflow='visible'
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
