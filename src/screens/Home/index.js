import React from "react";
import { 
  View,
  Box,
  HStack,
  VStack,
  Heading,
  Text,
  FlatList,
  StatusBar
} from "native-base";
import { useTicketContext } from '../../util/TicketContext';
import TicketCard from "../../components/TicketCard";
import SelectButton from "../../components/SelectButton";
import CustomButton from "../../components/Button";
import EmptyList from "../../components/EmptyList";
import Colors from "../../theme/Colors";

const HomeScreen = ({ navigation }) => {
    const [selected, setSelected] = React.useState(0);
    const { tickets, updateTicket } = useTicketContext();

    const ongoingTickets = tickets.filter(item => item.status === 'ONGOING');
    const finishedTickets = tickets.filter(item => item.status === 'FINISHED');

    return (
        <View alignItems="center" bg={Colors.base.background}>
            <StatusBar backgroundColor={Colors.base.primaryShape}/>
            <Box w="90%" h="100%" pt="6">
                <VStack h="100%">
                    <Box>
                        <HStack justifyContent="space-between" alignItems="center">
                            <Heading color={Colors.base.title}>Solicitações</Heading>
                            <Text color={Colors.base.textBase} fontSize="md">{(selected === 0) ? ongoingTickets.length : finishedTickets.length}</Text>
                        </HStack>
                        <HStack mt={3} space={2} mr="2">
                            <Box w="50%">
                                <SelectButton
                                    label="EM ANDAMENTO"
                                    isSelected={selected === 0}
                                    onPress={() => setSelected(0)}
                                    color={Colors.support.secondary}
                                />
                            </Box>
                            <Box w="50%">
                                <SelectButton
                                    label="FINALIZADOS"
                                    isSelected={selected === 1}
                                    onPress={() => setSelected(1)}
                                    color={Colors.product.secondary2}
                                />
                            </Box>
                        </HStack>
                    </Box>
                    
                    {selected === 0 ?
                        (ongoingTickets.length > 0 ?            
                            <FlatList mt="5" w="100%" data={ongoingTickets} renderItem={({item}) => 
                                <TicketCard ticket={item} navigation={navigation} />
                            }/>
                        : <EmptyList text="Você ainda não tem chamados criados" />
                        )
                    :   (finishedTickets.length > 0 ?            
                            <FlatList mt="5" w="100%" data={finishedTickets} renderItem={({item}) => 
                                <TicketCard ticket={item} navigation={navigation} />
                            }/>
                        : <EmptyList text="Você ainda não tem chamados finalizados" />
                        )
                    }

                    <Box flexGrow={1} justifyContent="flex-end">
                        <CustomButton 
                            onPress={() => {navigation.navigate('RequestRegister')}}
                            alignSelf="end" w="100%" 
                            text="Nova solicitação"
                        />
                    </Box>
                </VStack>
            </Box>
        </View>
    );
};

export default HomeScreen; 