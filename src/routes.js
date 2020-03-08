import React from 'react';
import {Provider} from 'react-redux'
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home/homeScreen';

import COLORS from './config/colors';
import store from './store';


const Stack = createStackNavigator();

function Routes() {
  return (
      <Provider store={store}>     
    <NavigationContainer>
        <StatusBar
            backgroundColor={COLORS.PRIMARY_DARK}
            barStyle="light-content"
        />
        <Stack.Navigator>
          <Stack.Screen 
              name="Home" 
              component={HomeScreen}
              options={{ 
                title: 'Filmes Polulares',
                headerStyle: {
                  backgroundColor: COLORS.PRIMARY_DARK,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  elevation: 2,
                  // shadowOpacity: 0,
                  borderBottomWidth: 0,
                  shadowOffset: { height: 2 }
                },
                headerTintColor: COLORS.WHITE,
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }} />
        </Stack.Navigator>
    </NavigationContainer>
      </Provider>
  );
}

export default Routes;