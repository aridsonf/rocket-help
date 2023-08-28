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
import styles from "./styles";

const HomeScreen = ({ navigation }) => {
    const [selected, setSelected] = React.useState(0);
    const { tickets, updateTicket } = useTicketContext();

    const ongoingTickets = tickets.filter(item => item.status === 'ONGOING');
    const finishedTickets = tickets.filter(item => item.status === 'FINISHED');

    return (
        <View {...styles.view}>
            <StatusBar backgroundColor={Colors.base.primaryShape}/>
            <Box {...styles.box}>
                <VStack h="100%">
                    <Box>
                        <HStack {...styles.hStackHeading}>
                            <Heading color={Colors.base.title}>Solicitações</Heading>
                            <Text {...styles.textHeading}>
                                {(selected === 0) ? ongoingTickets.length : finishedTickets.length}
                            </Text>
                        </HStack>
                        <HStack {...styles.hStackButtons}>
                            <Box {...styles.boxSelectButtons}>
                                <SelectButton
                                    label="EM ANDAMENTO"
                                    isSelected={selected === 0}
                                    onPress={() => setSelected(0)}
                                    color={Colors.support.secondary}
                                />
                            </Box>
                            <Box {...styles.boxSelectButtons}>
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
                            <FlatList {...styles.flatList} data={ongoingTickets} renderItem={({item}) => 
                                <TicketCard ticket={item} navigation={navigation} />
                            }/>
                        : <EmptyList text="Você ainda não tem chamados criados" />
                        )
                    :   (finishedTickets.length > 0 ?            
                            <FlatList {...styles.flatList} data={finishedTickets} renderItem={({item}) => 
                                <TicketCard ticket={item} navigation={navigation} />
                            }/>
                        : <EmptyList text="Você ainda não tem chamados finalizados" />
                        )
                    }

                    <Box {...styles.boxSendButton}>
                        <CustomButton 
                            onPress={() => {navigation.navigate('RequestRegister')}}
                            {...styles.endButton} 
                            text="Nova solicitação"
                        />
                    </Box>
                </VStack>
            </Box>
        </View>
    );
};

export default HomeScreen; 