import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
enableScreens();

import NewUserLandingPage from './client/screens/newUserLandingPage';
import CreateAccount from './client/screens/createAccount';
import EnterBasicBodyInfo from './client/screens/enterBasicBodyInfo';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007aff', // Set your primary color here
    accent: '#ff3d00', // Set your accent color here
  },
};

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="NewUserLandingPage">
            <Stack.Screen 
              name="NewUserLandingPage" 
              component={NewUserLandingPage} 
            />
            <Stack.Screen 
              name="CreateAccount" 
              component={CreateAccount} 
            />
            <Stack.Screen 
              name="EnterBasicBodyInfo" 
              component={EnterBasicBodyInfo} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
