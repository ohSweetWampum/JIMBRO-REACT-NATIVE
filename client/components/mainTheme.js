import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from '../../jimbro/App';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFDAB9', 
    background: '#FFFFE0', 
    surface: '#FFFFE0', 
  },
};

export default function mainTheme() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

