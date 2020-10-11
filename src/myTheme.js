import { css } from 'styled-components';

const myTheme = {
  global: {
    colors: {
      brand: '#3b5249',
      'accent-1': '#ff7e67',
      focus: 'accent-4',
      'accent-2': '#519872',
      'accent-3': '#a4b494',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
  card: {
    container: {
      elevation: 'none',
    },
    footer: {
      pad: 'medium',
    },
  },
  tab: {
    active: {
      color: 'accent-4',
    },
    border: {
      active: {
        color: 'accent-4',
      },
    },
    pad: 'small',
  },
  tabs: {
    header: {
      background: 'accent-3',
    },
    pad: 'small',
    gap: 'large',
    extend: css`
      display: flex;
    `,
  },
};

export default myTheme;
