import React, {useState} from "react";
import { 
  View,
  Box, 
  Heading, 
  VStack, 
  FormControl,
  Center, 
  Image,
  Icon,
  ScrollView,
  StatusBar
} from "native-base";
import { Keyboard } from 'react-native';
import { Key, Envelope } from "phosphor-react-native";
import { displayNotification } from '../../util/NotificationUtils'; 
import CustomInput from "../../components/Input";
import CustomButton from "../../components/Button";
import Colors from "../../theme/Colors";
import styles from './styles';
import { HeadingStyle, ScrollViewStyle } from './CustomStyle';

const LoginScreen = ({ navigation }) => {
  const [isEmailFilled, setIsEmailFilled] = useState(false);
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);
  const [errorEmailInput, setErrorEmailInput] = useState(false);
  const [errorPasswordInput, setErrorPasswordInput] = useState(false);
  
  const handleEmailChange = (value) => {
    setIsEmailFilled(value.trim().length > 0);
    setErrorEmailInput(false);
  };
  const handlePasswordChange = (value) => {
    setIsPasswordFilled(value.trim().length > 0);
    setErrorPasswordInput(false);
  };

  const handleLogin = () => {
    Keyboard.dismiss();
    if (!isEmailFilled) {
        setErrorEmailInput(true);
    }
    if (!isPasswordFilled) {
        setErrorPasswordInput(true);
    }
    if (isEmailFilled && isPasswordFilled) {
        navigation.navigate('Home')
        displayNotification(
          "Bem-vindo ao nosso aplicativo!",
          "Você fez login com sucesso."
        )
    }
  }

  return (
    <ScrollView {...ScrollViewStyle}>
        <StatusBar backgroundColor={Colors.base.tertiaryShape}/>
        <View style={styles.container}>
            <Box safeArea style={styles.box}>
                <Center>
                    <Image source={require("../../assets/logo/vertical-orientation.png")} alt="Alternate Text" />
                </Center>
                <Heading {...HeadingStyle}>
                    Acesse sua conta
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl>
                        <CustomInput
                            errorInput={errorEmailInput}
                            isFilled={isEmailFilled}
                            handleInputChange={handleEmailChange}
                            setErrorInput={setErrorEmailInput}
                            placeholder="E-mail"
                            type="text"
                            leftIcon={<Icon as={<Key color={
                                errorEmailInput ? Colors.base.error : (isEmailFilled ? Colors.product.primary : Colors.base.placeholder)
                            } />} size={5} ml="2" />}
                        />
                    </FormControl>
                    <FormControl>
                        <CustomInput
                            errorInput={errorPasswordInput}
                            isFilled={isPasswordFilled}
                            handleInputChange={handlePasswordChange}
                            setErrorInput={setErrorPasswordInput}
                            placeholder="Senha"
                            type="password"
                            leftIcon={<Icon as={<Envelope color={
                                errorPasswordInput ? Colors.base.error : (isPasswordFilled ? Colors.product.primary : Colors.base.placeholder)
                            } />} size={5} ml="2" />}
                        />
                    </FormControl>
                    <CustomButton 
                        onPress={handleLogin}
                        text="Entrar"
                    />
                </VStack>
            </Box>
        </View>
    </ScrollView>
    );
};

export default LoginScreen; 