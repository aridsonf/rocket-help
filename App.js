import React from "react";
import { 
  Box, 
  Text, 
  Heading, 
  VStack, 
  FormControl, 
  Input,
  Button, 
  HStack, 
  Center, 
  NativeBaseProvider, 
  extendTheme,
  Image,
  Icon
} from "native-base";
import { Foundation, FontAwesome5 } from "@expo/vector-icons";

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({ config });

const Example = () => {
  const myRef = React.useRef({});
  const myRefI = React.useRef({});

  React.useEffect(() => {
    const styleObj = {
      backgroundColor: "#E51C44",
    };
    const styleObjI = {
      backgroundColor: "#121214",
    };

    myRef.current.setNativeProps({
      style: styleObj
    });
    myRefI.current.setNativeProps({
      style: styleObjI
    });
  }, [myRef, myRefI]);

  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="400px" >
        <Center>
          <Image source={require("./assets/Icon.png")} alt="Alternate Text" size="xl" />
        </Center>
        <Heading mt="1" textAlign="center" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
            Acesse sua conta
        </Heading>

        <VStack space={3} mt="5">
          <FormControl ref={myRefI}>
          <Input 
              InputLeftElement={<Image source={require("./assets/icons/envelope.png")} alt="Alternate Text" ml="2" />} 
              placeholder="E-mail"
            />
          </FormControl>
          <FormControl ref={myRefI}>
            <Input 
              InputLeftElement={<Image source={require("./assets/icons/key.png")} alt="Alternate Text" ml="2" />} 
              placeholder="Senha" type="password"
            />
          </FormControl>
          <Button ref={myRef} mt="2" py="16px" px="32px">
            Entrar
          </Button>
        </VStack>
      </Box>
    </Center>;
};

export default function App() {

  return (
    <NativeBaseProvider theme={customTheme}>
      <Center flex={1} px="3" bg="coolGray.800">
          <Example />
      </Center>
    </NativeBaseProvider>
    );
}
