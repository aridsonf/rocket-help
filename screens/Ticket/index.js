import React, {useState} from "react";
import { 
  View,
  Box,
  VStack,
  Button,
  TextArea,
  Input,
  Text,
  HStack,
  Icon,
  Divider,
  ScrollView
} from "native-base";
import Colors from "../../theme/Colors";
import { Hourglass, CheckCircle, DesktopTower, ClipboardText } from "phosphor-react-native";
import { useTicketContext } from '../../util/TicketContext';

const TicketScreen = ({ route, navigation }) => {
    const { tickets, giveSolution } = useTicketContext();

    const { ticket, otherParam } = route.params;
    const [solution, setSolution] = useState('');
    const [errorSolutionInput, setErrorSolutionInput] = useState(false);
    const handleSolutionChange = (value) => {
        setSolution(value);
        setErrorSolutionInput(false);
    };
    const handleRegister = () => {
        if (!solution) {
            setErrorSolutionInput(true);
        } else {
            giveSolution(ticket.id, solution)
            navigation.navigate('Home')
        }
    }

    return (
        <Box alignItems="center" bg={Colors.base.background}>
            {( ticket?.status === "ONGOING" ?
                <HStack w="100%" bg={Colors.base.secondaryShape} py="16px" px="12px"  alignItems="center" justifyContent="center" mt="-1">
                    <Icon as={<Hourglass color={Colors.support.secondary} h="22px"/>}/>
                    <Text ml="2" fontSize="16px" color={Colors.support.secondary}>
                    EM ANDAMENTO
                    </Text> 
                </HStack> : 
                <HStack w="100%" bg={Colors.base.secondaryShape} py="16px" px="12px"  alignItems="center" justifyContent="center" mt="-1">
                    <Icon as={<CheckCircle color={Colors.product.secondary2} h="22px"/>}/>
                    <Text ml="2" fontSize="16px" color={Colors.product.secondary2}>
                    FINALIZADO
                    </Text> 
                </HStack> 
            )}
            <Box w="90%" h="93.2%">
                <ScrollView>
                    <VStack space={6} py="6">
                        <Box alignItems="center" bg={Colors.base.primaryShape} p="2" pb="4" rounded="md">
                            <HStack w="100%" alignItems="center" mt="4" ml="6">
                                <Icon as={<DesktopTower color={Colors.support.primary} h="22px"/>}/>
                                <Text ml="2" fontSize="16px" color={Colors.base.placeholder}>
                                    EQUIPAMENTO
                                </Text> 
                            </HStack> 
                            <HStack w="100%" alignItems="center" py="2" ml="6">
                                <Text fontSize="16px" color={Colors.base.title}>
                                    {ticket?.equipment}
                                </Text> 
                            </HStack> 
                        </Box>
                        <Box alignItems="center" bg={Colors.base.primaryShape} p="2" pb="4" rounded="md">
                            <HStack w="100%" alignItems="center" mt="4" ml="6">
                                <Icon as={<ClipboardText color={Colors.support.primary} h="22px"/>}/>
                                <Text ml="2" fontSize="16px" color={Colors.base.placeholder}>
                                    DESCRIÇÃO DO PROBLEMA
                                </Text> 
                            </HStack> 
                            <VStack w="100%" justifyContent="center" py="2" ml="6" borderBottomColor={Colors.base.placeholder} borderBottomRadius={1}>
                                <Text mr="6" fontSize="16px" color={Colors.base.title}>
                                    {ticket?.problem}
                                </Text> 
                                <Divider alignSelf="center" w="93%" mr="6" thickness={2} my={4} bg={Colors.base.secondaryShape}/>
                                <Text mr="6" fontSize="14px" color={Colors.base.placeholder}>
                                    Registrado em 20/11/2022 às 14:30
                                </Text> 
                            </VStack> 
                        </Box>
                        <Box alignItems="center" bg={Colors.base.primaryShape} p="2" rounded="md">
                            <HStack w="100%" alignItems="center" mt="4" ml="6">
                                <Icon as={<CheckCircle color={Colors.support.primary} h="22px"/>}/>
                                <Text ml="2" fontSize="16px" color={Colors.base.placeholder}>
                                    SOLUÇÃO
                                </Text> 
                            </HStack> 
                            {( ticket?.status === "ONGOING" ?
                                <TextArea 
                                    h="263px" mt="2"
                                    placeholder="Descrição do problema" 
                                    borderWidth={errorSolutionInput ? 1 : 0}
                                    borderColor={errorSolutionInput && Colors.base.error}
                                    color={solution ? Colors.base.textBase : Colors.base.placeholder}
                                    fontSize="16px"
                                    _focus={{
                                        borderWidth: 0,
                                        bg: Colors.base.primaryShape,
                                    }}
                                    onChangeText={handleSolutionChange}
                                    onFocus={() => {setErrorSolutionInput(false)}}
                                /> : 
                                <VStack w="100%" justifyContent="center" py="2" ml="6" borderBottomColor={Colors.base.placeholder} borderBottomRadius={1}>
                                    <Text mr="6" fontSize="16px" color={Colors.base.title}>
                                        {ticket?.solution}
                                    </Text> 
                                    <Divider alignSelf="center" w="93%" mr="6" thickness={2} my={4} bg={Colors.base.secondaryShape}/>
                                    <Text mr="6" fontSize="14px" color={Colors.base.placeholder}>
                                        Registrado em 20/11/2022 às 14:30
                                    </Text> 
                                </VStack> 
                            )}
                        </Box>
                    </VStack>
                </ScrollView>
                {( ticket?.status === "ONGOING" ? 
                    <Box alignSelf="end">
                        <Button 
                            my="2" p="16px" w="100%" 
                            bg={Colors.product.primary} 
                            _pressed={{
                                bg: Colors.product.secondary1,
                            }}
                            _text={{
                                fontWeight: "bold"
                            }}
                            onPress={handleRegister}
                        >
                            Finalizar
                        </Button>
                    </Box> : <Box></Box>
                )}
            </Box>
        </Box>
    );
};

export default TicketScreen; 