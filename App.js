import React from "react";
import { 
  NativeBaseProvider, 
  extendTheme,
} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/Login";

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({ config });

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={customTheme}>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
