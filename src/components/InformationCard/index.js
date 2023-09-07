import React from "react";
import { 
    Box, 
    HStack,
    VStack, 
    Divider, 
    Text 
} from 'native-base';
import Colors from "../../theme/Colors";

const InformationCard = ({ 
    icon, 
    title, 
    text, 
    obs,
    ...restProps
}) => {
  return (
    <Box alignItems="center" bg={Colors.base.primaryShape} p="2" pb="4" rounded="md" {...restProps}>
        <HStack w="100%" alignItems="center" mt="4" ml="6">
            {icon}
            <Text ml="2" fontSize="16px" color={Colors.base.placeholder}>
                {title}
            </Text> 
        </HStack> 
        <VStack w="100%" justifyContent="center" py="2" ml="6" borderBottomColor={Colors.base.placeholder} borderBottomRadius={1}>
            <Text mr="6" fontSize="16px" color={Colors.base.title}>
                {text}
            </Text> 
            {obs && <Divider alignSelf="center" w="93%" mr="6" thickness={2} my={4} bg={Colors.base.secondaryShape}/>}
            {obs &&
                <Text mr="6" fontSize="14px" color={Colors.base.placeholder}>
                    {obs}
                </Text>
            }
        </VStack> 
    </Box>
  );
};

export default InformationCard;