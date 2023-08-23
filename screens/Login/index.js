import React, {useState} from "react";
import { 
  View,
  Box, 
  Heading, 
  VStack, 
  FormControl, 
  Input,
  Button, 
  Center, 
  Image,
  Icon
} from "native-base";
import { Key, Envelope } from "phosphor-react-native";
import Colors from "../../theme/Colors";

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
    if (!isEmailFilled) {
        setErrorEmailInput(true);
    }
    if (!isPasswordFilled) {
        setErrorPasswordInput(true);
    }
    if (isEmailFilled && isPasswordFilled) {
        // navigation.navigate('Home')
    }
  }

  return (
        <View w="100%" alignItems="center" flex={1} pt="62px" px="3" bg={Colors.base.tertiaryShape}>
            <Box safeArea w="90%" maxW="400px">
                <Center>
                    <Image source={require("../../assets/logo/vertical-orientation.png")} alt="Alternate Text" />
                </Center>
                <Heading mt="20" textAlign="center" color={Colors.base.title} fontWeight="medium" style="md" >
                    Acesse sua conta
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl>
                        <Input 
                            borderWidth={errorEmailInput ? 1 : 0}
                            borderColor={errorEmailInput && Colors.base.error}
                            bg={Colors.base.background}
                            color={isEmailFilled ? Colors.base.textBase : Colors.base.placeholder}
                            _focus={{
                                borderColor: Colors.product.secondary1,
                                borderWidth: 1,
                                bg: Colors.base.background,
                                color: Colors.base.textBase,
                            }}
                            InputLeftElement={<Icon as={<Key color={
                                errorEmailInput ? Colors.base.error : (isEmailFilled ? Colors.product.primary : Colors.base.placeholder)
                            } />} size={5} ml="2" />} 
                            placeholder="E-mail"
                            onChangeText={handleEmailChange}
                            onFocus={() => {setErrorEmailInput(false)}}
                        />
                    </FormControl>
                    <FormControl>
                        <Input 
                            borderWidth={errorPasswordInput ? 1 : 0}
                            borderColor={errorPasswordInput && Colors.base.error}
                            bg={Colors.base.background}
                            color={isPasswordFilled ? Colors.base.textBase : Colors.base.placeholder}
                            _focus={{
                                borderColor: Colors.product.secondary1,
                                borderWidth: 1,
                                bg: Colors.base.background,
                                color: Colors.base.textBase,
                                _text: Colors.base.textBase
                            }}
                            InputLeftElement={<Icon as={<Envelope color={
                                errorPasswordInput ? Colors.base.error : (isEmailFilled ? Colors.product.primary : Colors.base.placeholder)
                            } />} size={5} ml="2" />} 
                            placeholder="Senha" type="password"
                            onChangeText={handlePasswordChange}
                            onFocus={() => {setErrorPasswordInput(false)}}
                        />
                    </FormControl>
                    <Button 
                        mt="2" p="16px" 
                        bg={Colors.product.primary} 
                        _pressed={{
                            bg: Colors.product.secondary1,
                        }}
                        onPress={handleLogin}
                    >
                        Entrar
                    </Button>
                </VStack>
            </Box>
        </View>
    );
};

export default LoginScreen; 