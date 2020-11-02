import { css } from 'styled-components';

const orange = '#ff7e67';

const myTheme = {
  global: {
    colors: {
      brand: '#3b5249',
      'accent-1': '#ff7e67',
      focus: 'accent-1',
      'accent-2': '#519872',
      'accent-3': '#a4b494',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    elevation: {
      light: {
        upper: '0px -2px 4px rgba(0,0,0,0.20) ',
      },
      dark: {
        upper: '0px -2px 4px rgba(0,0,0,0.20) ',
      },
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
      //accent-4
      color: orange,
    },
    border: {
      active: {
        //accent-4
        color: orange,
      },
    },
    pad: { top: 'small' },
  },
  tabs: {
    header: {
      background: '#eee',
    },
    pad: { bottom: 'small' },
    gap: 'small',
    extend: css`
      display: flex;
    `,
  },
};

export default myTheme;
