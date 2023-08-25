import React from "react";
import { 
  NativeBaseProvider, 
  extendTheme
} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { TicketProvider } from './util/TicketContext';
import { AppRoutes } from './navigation/Route';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({ config });

export default function App() {
  return (
    <TicketProvider>
      <NavigationContainer theme={customTheme}>
        <NativeBaseProvider>
          <AppRoutes />
        </NativeBaseProvider>
      </NavigationContainer>
    </TicketProvider>
  );
}
