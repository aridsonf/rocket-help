import React, {useState} from "react";
import { 
  View,
  Box,
  VStack,
  ScrollView,
  StatusBar
} from "native-base";
import { Keyboard } from 'react-native';
import { useTicketContext } from '../../../util/TicketContext';
import { displayNotification } from '../../../util/NotificationUtils'; 
import CustomInput from "../../../components/Input";
import CustomButton from "../../../components/Button";
import Colors from "../../../theme/Colors";
import styles from "./styles";
import moment from 'moment';

const RequestRegister = ({ navigation }) => {
    const { tickets, updateTicket } = useTicketContext();

    const [patrimony, setPatrimony] = useState('');
    const [description, setDescriptionInput] = useState('');
    const [errorPatrimonyInput, setErrorPatrimonyInput] = useState(false);
    const [errorDescriptionInput, setErrorDescriptionInput] = useState(false);
    const handlePatrimonyChange = (value) => {
        setPatrimony(value);
        setErrorPatrimonyInput(false);
    };
    const handleDescriptionChange = (value) => {
        setDescriptionInput(value);
        setErrorDescriptionInput(false);
    };
    const handleRegister = () => {
        Keyboard.dismiss();
        if (!patrimony) {
            setErrorPatrimonyInput(true);
        }
        if (!description) {
            setErrorDescriptionInput(true);
        }
        if (patrimony && description) {
            let newTicket = {
                id: tickets.length + 1,
                equipment: patrimony,
                problem: description,
                solution: null,
                status: "ONGOING",
                created_at: moment().format(),
                solved_at: null
            };
            updateTicket(newTicket)
            displayNotification(
                "Ticket Criado!",
                "Um novo ticket foi registrado em nosso sistema."
            )
            navigation.navigate('Home')
        }
    }

    return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StatusBar backgroundColor={Colors.base.primaryShape}/>
        <View {...styles.view}>
            <Box {...styles.box}>    
                <VStack {...styles.vStack}>
                    <Box alignItems="center">
                        <CustomInput
                            errorInput={errorPatrimonyInput}
                            isFilled={patrimony}
                            handleInputChange={handlePatrimonyChange}
                            setErrorInput={setErrorPatrimonyInput}
                            placeholder="Número de Patrimônio"
                            type="text"
                        />
                        <CustomInput
                            {...styles.customInput}
                            errorInput={errorDescriptionInput}
                            isFilled={description}
                            handleInputChange={handleDescriptionChange}
                            setErrorInput={setErrorDescriptionInput}
                            placeholder="Descrição do problema"
                            type="textArea"
                        />
                    </Box>
                    <Box {...styles.boxSendButton}>
                        <CustomButton 
                            onPress={handleRegister}
                            {...styles.endButton} 
                            text="Cadastrar"
                        />
                    </Box>
                </VStack>
            </Box>
        </View>
    </ScrollView>
    );
};

export default RequestRegister; 