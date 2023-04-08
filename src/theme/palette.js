import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS
// const GREY = {
//   0: '#FFFFFF',
//   100: '#F9FAFB',
//   200: '#F4F6F8',
//   300: '#DFE3E8',
//   400: '#C4CDD5',
//   500: '#919EAB',
//   600: '#637381',
//   700: '#454F5B',
//   800: '#212B36',
//   900: '#161C24',
// };

// const PRIMARY = {
//   lighter: '#D1E9FC',
//   light: '#76B0F1',
//   main: '#2065D1',
//   dark: '#103996',
//   darker: '#061B64',
//   contrastText: '#fff',
// };

// const SECONDARY = {
//   lighter: '#D6E4FF',
//   light: '#84A9FF',
//   main: '#3366FF',
//   dark: '#1939B7',
//   darker: '#091A7A',
//   contrastText: '#fff',
// };

// const INFO = {
//   lighter: '#D0F2FF',
//   light: '#74CAFF',
//   main: '#1890FF',
//   dark: '#0C53B7',
//   darker: '#04297A',
//   contrastText: '#fff',
// };

// const SUCCESS = {
//   lighter: '#E9FCD4',
//   light: '#AAF27F',
//   main: '#54D62C',
//   dark: '#229A16',
//   darker: '#08660D',
//   contrastText: GREY[800],
// };

// const WARNING = {
//   lighter: '#FFF7CD',
//   light: '#FFE16A',
//   main: '#FFC107',
//   dark: '#B78103',
//   darker: '#7A4F01',
//   contrastText: GREY[800],
// };

// const ERROR = {
//   lighter: '#FFE7D9',
//   light: '#FFA48D',
//   main: '#FF4842',
//   dark: '#B72136',
//   darker: '#7A0C2E',
//   contrastText: '#fff',
// };

// const palette = {
//   common: { black: '#000', white: '#fff' },
//   primary: PRIMARY,
//   secondary: SECONDARY,
//   info: INFO,
//   success: SUCCESS,
//   warning: WARNING,
//   error: ERROR,
//   grey: GREY,
//   divider: alpha(GREY[500], 0.24),
//   text: {
//     primary: GREY[800],
//     secondary: GREY[600],
//     disabled: GREY[500],
//   },
//   background: {
//     paper: '#fff',
//     default: GREY[100],
//     neutral: GREY[200],
//   },
//   action: {
//     active: GREY[600],
//     hover: alpha(GREY[500], 0.08),
//     selected: alpha(GREY[500], 0.16),
//     disabled: alpha(GREY[500], 0.8),
//     disabledBackground: alpha(GREY[500], 0.24),
//     focus: alpha(GREY[500], 0.24),
//     hoverOpacity: 0.08,
//     disabledOpacity: 0.48,
//   },
// };


const GREY = {
  0: '#FFFFFF',
  100: '#e8f1f7',
  200:'#E3F2FD',
  300:'#90CAF9',

  // 100: '#E3F2FD',
  // 200: '#BBDEFB',
  // 300: '#90CAF9',
  400: '#64B5F6',
  // 500: '#0D47A1',
  // 600: '#00388e',
  // 700: '#0e4071',
  500: '#457CBA',
  600: '#366DAB',
  700: '#265D9B',
  800: '#003775',
  900: '#161C24',
};

const PRIMARY = {
  lighter: '#F9FAFB',
  light: '#F4F6F8',
  main: '#919EAB',
  dark: '#637381',
  darker: '#212B36',
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#bb8fdb',
  light: '#a565d2',
  main: '#6b239f',
  dark: '#7b3fa6',
  darker: '#4c097b',
  contrastText: '#fff',
};

const INFO = {
  lighter: '#C8CCD4',
  light: '#B9BDC5',
  main: '#8B8F97',
  dark: '#7C8088',
  darker: '#5D6169',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: GREY[800],
};

const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff',
};

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: '#fff',
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
