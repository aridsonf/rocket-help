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
import styles from "./styles";
import moment from 'moment';

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
        <Box {...styles.mainBox}>
            <StatusBar backgroundColor={Colors.base.primaryShape}/>
            {( ticket?.status === "ONGOING" ?
                <HStack {...styles.hStackStatus}>
                    <Icon as={<Hourglass color={Colors.support.secondary} h="22px"/>}/>
                    <Text {...styles.textOngoing}>
                        EM ANDAMENTO
                    </Text> 
                </HStack> : 
                <HStack {...styles.hStackStatus}>
                    <Icon as={<CheckCircle color={Colors.product.secondary2} h="22px"/>}/>
                    <Text {...styles.textFinished}>
                        FINALIZADO
                    </Text> 
                </HStack> 
            )}
            <Box {...styles.scrollBox}>
                <ScrollView>
                    <VStack {...styles.scrollVStack}>
                        <InformationCard 
                            title="EQUIPAMENTO"
                            text={ticket?.equipment}
                            icon={<Icon as={<DesktopTower {...styles.cardIcon} />}/>}
                        />
                        <InformationCard 
                            title="DESCRIÇÃO DO PROBLEMA"
                            text={ticket?.problem}
                            obs={"Registrado em " + moment(ticket.created_at).format("DD/MM/YYYY") + " às " + moment(ticket.created_at).format("HH") + "h"}
                            icon={<Icon as={<ClipboardText {...styles.cardIcon}/>}/>}
                        />
                        {( ticket?.status === "ONGOING" 
                        ? <InputCard 
                            errorInput={errorSolutionInput}
                            isFilled={solution}
                            handleInputChange={handleSolutionChange}
                            setErrorInput={setErrorSolutionInput}
                            placeholder="Descrição da solução"
                            title="SOLUÇÃO"
                            icon={<Icon as={<CheckCircle {...styles.cardIcon}/>}/>}
                        />  
                        : <InformationCard 
                            title="SOLUÇÃO"
                            text={ticket?.solution}
                            obs={"Registrado em " + moment(ticket.solved_at).format("DD/MM/YYYY") + " às " + moment(ticket.solved_at).format("HH") + "h"}
                            icon={<Icon as={<CheckCircle {...styles.cardIcon}/>}/>}
                        />)}
                    </VStack>
                </ScrollView>
                {( ticket?.status === "ONGOING" ? 
                    <Box {...styles.boxEndButton}>
                        <CustomButton 
                            onPress={handleRegister}
                            {...styles.endButton}   
                            text="Finalizar"
                        />
                    </Box> : <Box></Box>
                )}
            </Box>
        </Box>
    );
};

export default TicketScreen; 