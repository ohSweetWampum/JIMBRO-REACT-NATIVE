import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import NewUserLandingPage from '../screens/newUserLandingPage';
import CreateAccount from '../screens/createAccount';
import EnterBasicBodyInfo from '../screens/enterBasicBodyInfo';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="NewUserLandingPage">
          <Stack.Screen 
            name="NewUserLandingPage" 
            component={NewUserLandingPage} 
            options={{ header: () => 
              <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
              /> 
            }}
          />
          <Stack.Screen 
            name="CreateAccount" 
            component={CreateAccount} 
            options={{ header: () => 
              <Header
                placement="left"
                leftComponent={{ icon: 'arrow-back', color: '#fff' }}
                centerComponent={{ text: 'Create Account', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
              /> 
            }}
          />
          <Stack.Screen 
            name="EnterBasicBodyInfo" 
            component={EnterBasicBodyInfo} 
            options={{ header: () => 
              <Header
                placement="left"
                leftComponent={{ icon: 'arrow-back', color: '#fff' }}
                centerComponent={{ text: 'Enter Body Info', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
              /> 
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
