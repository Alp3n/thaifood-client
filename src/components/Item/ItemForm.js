import React from 'react';
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

const ItemForm = ({ item, open, onClose, getValueFromForm }) => {
  // const defaultValue = {
  //   meat: null,
  //   noodle: null,
  //   egg: null,
  //   spicy: null,
  //   additional: null,
  //   sweet: null,
  //   quantity: null,
  // };

  console.log(item);

  let customValue = {};

  // const onCloseReset = () => {
  //   onClose();
  //   // getValueFromForm(customValue);
  // };

  // const retrieveMeat = ({ item, index }) => {
  //   const x = item.meats.en;
  //   x.forEach();
  // };

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
                <Text>List of allerges: {item.allergens.join(', ')}</Text>
              </Box>
              <Box gridArea='form'>
                <Form
                  value={customValue}
                  onChange={(nextValue) => {
                    console.log('Change', nextValue);
                    customValue = nextValue;
                  }}
                  onReset={() => customValue}
                  onSubmit={(event) => {
                    // console.log('Submited', event.value, event.touched);
                    console.log('Submit', event.value);
                    customValue = event.value;
                    const value =
                      (customValue, (customValue.name = item.names.en));
                    getValueFromForm(value);
                    onClose();
                  }}
                >
                  {/* {item.sweet == false || undefined ? ( */}
                  {item.meats.length > 0 && (
                    <FormField label='Meat'>
                      <Select
                        options={item.meats.map((meat) => meat.en)}
                        placeholder='Select type of meat'
                        name='meat'
                        required
                      />
                    </FormField>
                  )}

                  {/* ) : ( */}
                  {item.sweet && (
                    <FormField label='Sweetness'>
                      <Select
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
                    </FormField>
                  )}
                  {item.egg && (
                    <FormField label='Egg'>
                      <Select
                        options={['None', 'Fried', 'Omlet']}
                        name='egg'
                        placeholder='Select egg option'
                        required
                      />
                    </FormField>
                  )}
                  {item.type === 'noodles' && (
                    <FormField label='Noodles'>
                      <Select
                        options={['Thin', 'Wide', 'Something', 'Something']}
                        placeholder='Select type of noodles'
                        name='noodle'
                        required
                      />
                    </FormField>
                  )}
                  {item.spicy && (
                    <FormField label='Spiciness'>
                      <Select
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
                    </FormField>
                  )}
                  <FormField label='Additional'>
                    <Select
                      options={['None', 'Something']}
                      name='additional'
                      placeholder='Select any additional info'
                    />
                  </FormField>
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
