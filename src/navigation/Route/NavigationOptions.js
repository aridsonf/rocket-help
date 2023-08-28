import { 
    Pressable, 
    Icon,
    Image
} from "native-base";
import {
    SignOut, 
    CaretLeft 
} from 'phosphor-react-native';
import { displayNotification } from '../../util/NotificationUtils'; 
import Colors from '../../theme/Colors';

function LogoTitle() {
    return (
      <Image 
        source={require('../../assets/logo/horizontal-orientation.png')}
        alt="Logo"
      />
    );
}

export function getHomeScreenOptions(navigation) {
  return {
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
  };
}

export function getRequestRegisterScreenOptions(navigation) {
  return {
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
  };
}

export function getTicketScreenOptions(navigation) {
  return {
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
  };
}
