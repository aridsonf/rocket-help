import React from "react";
import { Box, HStack, VStack, Divider, Text, TextArea } from 'native-base';
import Colors from "../../theme/Colors";

const InputCard = ({ 
    icon, 
    title, 
    errorInput,
    isFilled,
    handleInputChange,
    placeholder,
    setErrorInput,
    type,
    ...restProps
}) => {
  return (
    <Box alignItems="center" bg={Colors.base.primaryShape} p="2" rounded="md">
        <HStack w="100%" alignItems="center" mt="4" ml="6">
            {icon}
            <Text ml="2" fontSize="16px" color={Colors.base.placeholder}>
                {title}
            </Text> 
        </HStack> 
        <TextArea 
            h="263px" mt="2"
            placeholder={placeholder}
            borderWidth={errorInput ? 1 : 0}
            borderColor={errorInput && Colors.base.error}
            color={isFilled ? Colors.base.textBase : Colors.base.placeholder}
            fontSize="16px"
            _focus={{
                borderWidth: 0,
                bg: Colors.base.primaryShape,
            }}
            onChangeText={handleInputChange}
            onFocus={() => {errorInput && setErrorInput(false)}}
            {...restProps}
        />
    </Box>
  );
};

export default InputCard;