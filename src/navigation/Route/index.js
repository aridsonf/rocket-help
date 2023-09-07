import React from 'react';
import { Image } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  getHomeScreenOptions, 
  getRequestRegisterScreenOptions, 
  getTicketScreenOptions 
} from './NavigationOptions'; 
import LoginScreen from '../../screens/Login';
import HomeScreen from '../../screens/Home';
import TicketScreen from '../../screens/Ticket';
import RequestRegisterScreen from '../../screens/Register/Request';

const Stack = createNativeStackNavigator();

export function LogoTitle() {
  return (
    <Image 
      source={require('../../assets/logo/horizontal-orientation.png')}
      alt="Logo"
    />
  );
}

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={({ navigation }) => getHomeScreenOptions(navigation)} 
      />
      <Stack.Screen 
        name="RequestRegister" 
        component={RequestRegisterScreen}
        options={({ navigation }) => getRequestRegisterScreenOptions(navigation)} 
      />
      <Stack.Screen 
        name="Ticket" 
        component={TicketScreen}
        initialParams={{ ticket: null }}
        options={({ navigation }) => getTicketScreenOptions(navigation)}
      />
    </Stack.Navigator>
  );
}
