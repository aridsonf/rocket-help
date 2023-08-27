import React, {useState} from "react";
import { 
  Box,
  VStack,
  Text,
  HStack,
  Icon,
  ScrollView,
  StatusBar
} from "native-base";
import { Hourglass, CheckCircle, DesktopTower, ClipboardText } from "phosphor-react-native";
import { useTicketContext } from '../../util/TicketContext';
import { displayNotification } from '../../util/NotificationUtils'; 
import CustomButton from "../../components/Button";
import InformationCard from "../../components/InformationCard";
import InputCard from "../../components/InputCard";
import Colors from "../../theme/Colors";

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
            displayNotification(
                "Ticket Concluído!",
                "Seu ticket foi concluído com sucesso."
            )
            giveSolution(ticket.id, solution)
            navigation.navigate('Home')
        }
    }

    return (
        <Box alignItems="center" bg={Colors.base.background}>
            <StatusBar backgroundColor={Colors.base.primaryShape}/>
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
                        <InformationCard 
                            title="EQUIPAMENTO"
                            text={ticket?.equipment}
                            icon={<Icon as={<DesktopTower color={Colors.support.primary} h="22px"/>}/>}
                        />
                        <InformationCard 
                            title="DESCRIÇÃO DO PROBLEMA"
                            text={ticket?.problem}
                            obs="Registrado em 20/11/2022 às 14:30"
                            icon={<Icon as={<ClipboardText color={Colors.support.primary} h="22px"/>}/>}
                        />
                        {( ticket?.status === "ONGOING" 
                        ? <InputCard 
                            errorInput={errorSolutionInput}
                            isFilled={solution}
                            handleInputChange={handleSolutionChange}
                            setErrorInput={setErrorSolutionInput}
                            placeholder="Descrição da solução"
                            title="SOLUÇÃO"
                            icon={<Icon as={<CheckCircle color={Colors.support.primary} h="22px"/>}/>}
                        />  
                        : <InformationCard 
                            title="SOLUÇÃO"
                            text={ticket?.solution}
                            obs="Registrado em 20/11/2022 às 14:30"
                            icon={<Icon as={<CheckCircle color={Colors.support.primary} h="22px"/>}/>}
                        />)}
                    </VStack>
                </ScrollView>
                {( ticket?.status === "ONGOING" ? 
                    <Box alignSelf="end">
                        <CustomButton 
                            onPress={handleRegister}
                            w="100%" 
                            text="Finalizar"
                        />
                    </Box> : <Box></Box>
                )}
            </Box>
        </Box>
    );
};

export default TicketScreen; 