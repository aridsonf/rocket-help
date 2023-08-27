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
                status: "ONGOING"
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
        <View alignItems="center" bg={Colors.base.primaryShape}>
            <Box w="90%" h="100%" pt="4">    
                <VStack h="100%">
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
                            h="83%" mt="3" 
                            errorInput={errorDescriptionInput}
                            isFilled={description}
                            handleInputChange={handleDescriptionChange}
                            setErrorInput={setErrorDescriptionInput}
                            placeholder="Descrição do problema"
                            type="textArea"
                        />
                    </Box>
                    <Box flexGrow={1} justifyContent="flex-end">
                        <CustomButton 
                            onPress={handleRegister}
                            alignSelf="end" w="100%" 
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