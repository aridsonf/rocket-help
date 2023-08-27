import React from "react";
import { 
  Text,
  Icon,
  Center
} from "native-base";
import { ChatTeardropText } from "phosphor-react-native";
import Colors from "../../theme/Colors";

const EmptyList = ({ text }) => {
    return (
        <Center p="10">
            <Icon as={<ChatTeardropText color={Colors.base.placeholder} size="44px"/>}/>          
            <Text 
                mt={8} fontSize="22px" 
                lineHeight="36px" fontWeight="400" 
                textAlign="center" 
                color={Colors.base.placeholder}
            >{text}</Text>
        </Center>
    );
};

export default EmptyList; 