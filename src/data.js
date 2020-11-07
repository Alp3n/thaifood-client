const data = [
  {
    _id: {
      $oid: '5f785f6fdcab3b6297655c33',
    },
    names: {
      en: 'Thai Basil',
      th: 'กะเพรา',
      pron: 'kra-pao',
    },
    desc: 'One of the most popular dishes in Thai cousine.',
    type: 'rice',
    meats: [
      {
        en: 'Chicken',
        th: 'ไก่',
        pron: 'gai',
      },
      {
        en: 'Pork',
        th: 'หมู',
        pron: 'moo',
      },
    ],
    allergens: [null],
    spicy: true,
    egg: true,
    image:
      'https://image.shutterstock.com/image-photo/rice-stirfried-chicken-basil-topped-600w-1391448710.jpg',
    ingredients: [
      'rice',
      'meat/seafood/tofu',
      'thai chilli',
      'oil',
      'holy basil',
      'soy sauce',
      'oyster sauce',
      'sugar',
      'fish sauce',
      'garlic',
    ],
  },
  {
    _id: {
      $oid: '5f78796615d9851c98b85ddb',
    },
    names: {
      en: 'Pad Thai',
      th: 'ผัดไทย',
      pron: 'pad-thai',
    },
    desc: 'The most popular noodle dish in Thai cousine. Stir fried noodles',
    type: 'noodles',
    meats: [
      {
        en: 'Chicken',
        th: 'ไก่',
        pron: 'gai',
      },
      {
        en: 'Pork',
        th: 'หมู',
        pron: 'moo',
      },
      {
        en: 'Shrimp',
        th: 'กุ้ง',
        pron: 'goong',
      },
    ],
    allergens: ['Peanuts', 'Eggs'],
    spicy: false,
    egg: false,
    image:
      'https://image.shutterstock.com/image-photo/delicious-thai-food-call-make-600w-1562220991.jpg',
    ingredients: [
      'rice noodles',
      'meat/seafood/tofu',
      'eggs',
      'tamarind juice',
      'fish sauce',
      'sugar',
      'lime',
      'bean sprouts',
      'garlic',
    ],
  },
  {
    _id: {
      $oid: '5f787a6d15d9851c98b85ddc',
    },
    names: {
      en: 'Tom Yum',
      th: 'ต้มยำ',
      pron: 'tom-yum',
    },
    desc: 'Red, spicy soup.',
    type: 'soup',
    meats: [
      {
        en: 'chicken',
        th: 'ไก่',
        pron: 'gai',
      },
      {
        en: 'pork',
        th: 'หมู',
        pron: 'moo',
      },
    ],
    allergens: [null],
    spicy: true,
    egg: false,
    image:
      'https://image.shutterstock.com/image-photo/yummy-tom-yum-soup-on-600w-1702589707.jpg',
    ingredients: [
      'broth',
      'meat/seafood/tofu',
      'chilli paste',
      'lemongrass',
      'kaffir lime leaves',
      'galangal',
      'lime juice',
      'fish sauce',
      'thai chilli',
    ],
  },
  {
    _id: {
      $oid: '5f787f3b15d9851c98b85ddd',
    },
    names: {
      en: 'Iced Coffee',
      th: 'กาแฟเย็น',
      pron: 'gaa-fee-yen',
    },

    desc: 'Deliciouse iced coffee, usually very sweet',
    type: 'drink',
    allergens: ['milk'],
    sweet: true,
    image:
      'https://image.shutterstock.com/z/stock-photo-iced-coffee-in-a-glass-isolated-and-white-background-389890444.jpg',
    ingredients: [
      'ice',
      'coffee',
      'evaporated milk',
      'condensed milk',
      'sugar',
    ],
  },
  {
    _id: {
      $oid: '5f826d9975e57d26bc6a36b3',
    },
    names: {
      en: 'Garlic',
      th: 'กะเพรา',
      pron: 'kra-pao',
    },
    desc: 'One of the most popular dishes in Thai cousine.',
    type: 'rice',
    meats: [
      {
        en: 'chicken',
        th: 'ไก่',
        pron: 'gai',
      },
      {
        en: 'pork',
        th: 'หมู',
        pron: 'moo',
      },
    ],
    allergens: [null],
    spicy: false,
    egg: true,
    image:
      'https://image.shutterstock.com/image-photo/stirfried-chicken-garlic-pepper-260nw-1697010973.jpg',
    ingredients: [
      'rice',
      'meat/seafood/tofu',
      'thai chilli',
      'oil',
      'holy basil',
      'soy sauce',
      'oyster sauce',
      'sugar',
      'fish sauce',
      'garlic',
    ],
  },
  {
    _id: {
      $oid: '5f826dc475e57d26bc6a36b4',
    },
    names: {
      en: 'Fried Rice',
      th: 'กะเพรา',
      pron: 'kra-pao',
    },
    desc: 'One of the most popular dishes in Thai cousine.',
    type: 'rice',
    meats: [
      {
        en: 'chicken',
        th: 'ไก่',
        pron: 'gai',
      },
      {
        en: 'pork',
        th: 'หมู',
        pron: 'moo',
      },
    ],
    allergens: [null],
    spicy: false,
    egg: true,
    image:
      'https://image.shutterstock.com/image-photo/thai-cuisine-crab-meat-fried-260nw-1124809931.jpg',
    ingredients: [
      'rice',
      'meat/seafood/tofu',
      'thai chilli',
      'oil',
      'holy basil',
      'soy sauce',
      'oyster sauce',
      'sugar',
      'fish sauce',
      'garlic',
    ],
  },
  {
    _id: {
      $oid: '5f826de375e57d26bc6a36b5',
    },
    names: {
      en: 'Something',
      th: 'กะเพรา',
      pron: 'kra-pao',
    },
    desc: 'One of the most popular dishes in Thai cousine.',
    type: 'rice',
    meats: [
      {
        en: 'chicken',
        th: 'ไก่',
        pron: 'gai',
      },
      {
        en: 'pork',
        th: 'หมู',
        pron: 'moo',
      },
    ],
    allergens: [null],
    spicy: false,
    egg: true,
    image:
      'https://image.shutterstock.com/image-photo/rice-stirfried-chicken-basil-topped-600w-1391448710.jpg',
    ingredients: [
      'rice',
      'meat/seafood/tofu',
      'thai chilli',
      'oil',
      'holy basil',
      'soy sauce',
      'oyster sauce',
      'sugar',
      'fish sauce',
      'garlic',
    ],
  },
];

export default data;
