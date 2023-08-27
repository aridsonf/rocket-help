import React from "react";
import { 
  Pressable, 
  Icon,
  Image
} from "native-base";
import { SignOut, CaretLeft } from "phosphor-react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { displayNotification } from '../../util/NotificationUtils'; 
import LoginScreen from "../../screens/Login";
import HomeScreen from "../../screens/Home";
import TicketScreen from "../../screens/Ticket";
import RequestRegisterScreen from "../../screens/Register/Request";
import Colors from "../../theme/Colors";

const Stack = createNativeStackNavigator();

function LogoTitle() {
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
        options={({ navigation }) => ({ 
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: Colors.base.primaryShape,
            },
            headerTintColor: Colors.base.primaryShape,
            headerRight: () => (
              <Pressable onPress={() => {
                displayNotification(
                  "Até logo!",
                  "Você fez logout com sucesso."
                )
                navigation.navigate('Login')
              }} >
                <Icon mr="2" as={<SignOut color={Colors.base.placeholder}/>}/>
              </Pressable>
            ),
            headerBackVisible: false,
        })}
      />
      <Stack.Screen 
        name="RequestRegister" 
        component={RequestRegisterScreen}
        options={({ navigation }) => ({ 
            headerTitle: "Solicitação",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: Colors.base.title,
              fontWeight: "bold"
            },
            headerStyle: {
              backgroundColor: Colors.base.primaryShape,
            },
            headerTintColor: Colors.base.primaryShape,
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()} >
                <Icon mr="2" as={<CaretLeft color={Colors.base.placeholder}/>}/>
              </Pressable>
            ),
        })}
      />
      <Stack.Screen 
        name="Ticket" 
        component={TicketScreen}
        initialParams={{ ticket: null }}
        options={({ navigation }) => ({ 
            headerTitle: "Solicitação",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: Colors.base.title,
              fontWeight: "bold"
            },
            headerStyle: {
              backgroundColor: Colors.base.primaryShape,
            },
            headerTintColor: Colors.base.primaryShape,
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()} >
                <Icon mr="2" as={<CaretLeft color={Colors.base.placeholder}/>}/>
              </Pressable>
            ),
          })}
      />
    </Stack.Navigator>
  );
}
