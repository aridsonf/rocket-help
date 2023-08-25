import React, {useState} from "react";
import { 
  View,
  Box,
  VStack,
  Button,
  Input,
  TextArea
} from "native-base";
import Colors from "../../../theme/Colors";
import { useTicketContext } from '../../../util/TicketContext';

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
            navigation.navigate('Home')
        }
    }

    return (
        <View alignItems="center" bg={Colors.base.primaryShape}>
            <Box safeArea w="90%" h="100%">
                <VStack h="100%">
                    <Box alignItems="center">
                        <Input 
                            borderWidth={errorPatrimonyInput ? 1 : 0}
                            borderColor={errorPatrimonyInput && Colors.base.error}
                            bg={Colors.base.background}
                            color={patrimony ? Colors.base.textBase : Colors.base.placeholder}
                            fontSize="16px"
                            _focus={{
                                borderColor: Colors.product.secondary1,
                                borderWidth: 1,
                                bg: Colors.base.background,
                                color: Colors.base.textBase,
                            }}
                            placeholder="Número de Patrimônio"
                            onChangeText={handlePatrimonyChange}
                            onFocus={() => {setErrorPatrimonyInput(false)}}
                        /> 
                        <TextArea 
                            h="83%" mt="3" 
                            placeholder="Descrição do problema" 
                            borderWidth={errorDescriptionInput ? 1 : 0}
                            borderColor={errorDescriptionInput && Colors.base.error}
                            bg={Colors.base.background}
                            color={description ? Colors.base.textBase : Colors.base.placeholder}
                            fontSize="16px"
                            _focus={{
                                borderColor: Colors.product.secondary1,
                                borderWidth: 1,
                                bg: Colors.base.background,
                                color: Colors.base.textBase,
                            }}
                            onChangeText={handleDescriptionChange}
                            onFocus={() => {setErrorDescriptionInput(false)}}
                        />
                    </Box>
                    <Box flexGrow={1} justifyContent="flex-end">
                        <Button 
                            alignSelf="end"
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
                            Cadastrar
                        </Button>
                    </Box>
                </VStack>
            </Box>
        </View>
    );
};

export default RequestRegister; 