import React from "react";
import { 
  NativeBaseProvider, 
  extendTheme,
  StatusBar
} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { TicketProvider } from './src/util/TicketContext';
import { AppRoutes } from './src/navigation/Route';
import {
  SafeAreaProvider
} from 'react-native-safe-area-context';
import Colors from "./src/theme/Colors";

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({ config });

export default function App() {
  return (
    <TicketProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={customTheme}>
          <NativeBaseProvider>
            <AppRoutes />
          </NativeBaseProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </TicketProvider>
  );
}
