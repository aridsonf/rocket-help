import React, {useState} from "react";
import { 
  View,
  Box,
  HStack,
  VStack,
  Heading,
  Text,
  Button,
  Pressable,
  Icon,
  Center,
  Stack,
  ScrollView,
  FlatList
} from "native-base";
import Colors from "../../theme/Colors";
import { ChatTeardropText, ClockAfternoon, Hourglass, CheckCircle } from "phosphor-react-native";
import { useTicketContext } from '../../util/TicketContext';

const HomeScreen = ({ navigation }) => {
    const [selected, setSelected] = React.useState(0);
    const { tickets, updateTicket } = useTicketContext();

    const ongoingTickets = tickets.filter(item => item.status === 'ONGOING');
    const finishedTickets = tickets.filter(item => item.status === 'FINISHED');

    return (
        <View alignItems="center" bg={Colors.base.background}>
            <Box safeArea w="90%" h="100%">
                <VStack h="100%">
                    <Box>
                        <HStack justifyContent="space-between" alignItems="center">
                            <Heading color={Colors.base.title}>Solicitações</Heading>
                            <Text color={Colors.base.textBase} fontSize="md">{(selected === 0) ? ongoingTickets.length : finishedTickets.length}</Text>
                        </HStack>
                        <HStack mt={3} space={2} mr="2">
                            <Box w="50%">
                            <Button 
                                mt="2" p="8px"
                                bg={Colors.base.primaryShape} 
                                _text={{ color: (selected === 0 ? Colors.support.secondary : Colors.base.placeholder) }}
                                borderColor={selected === 0 && Colors.support.secondary}
                                borderWidth={(selected === 0) ? 1 : 0}
                                _pressed={{
                                    bg: Colors.base.primaryShape
                                }}
                                onPress={() => {setSelected(0)}}
                            >
                                EM ANDAMENTO
                            </Button>
                            </Box>
                            <Box w="50%">
                            <Button 
                                mt="2" p="8px"
                                bg={Colors.base.primaryShape}   
                                _text={{ color: (selected === 1 ? Colors.product.secondary2 : Colors.base.placeholder) }}
                                borderColor={selected === 1 && Colors.product.secondary2}
                                borderWidth={(selected === 1) ? 1 : 0}
                                _pressed={{
                                    bg: Colors.base.primaryShape
                                }}
                                onPress={() => {setSelected(1)}}
                            >
                                FINALIZADOS
                            </Button>
                            </Box>
                        </HStack>
                    </Box>
                    
                    {selected === 0 ?
                        (ongoingTickets.length > 0 ?            
                            <FlatList mt="5" w="100%" data={ongoingTickets} renderItem={({item}) => 
                                <Pressable w="100%" onPress={() => navigation.navigate('Ticket', { ticket: item })} pt="4">
                                    <Box rounded="lg" w="100%" background={Colors.base.primaryShape} overflow="hidden"  borderColor={Colors.support.secondary} borderLeftWidth="8px">
                                        <HStack p="4" space={3} alignItems="center" justifyContent="space-between">
                                            <Stack space={2}>
                                                <Heading size="md" color={Colors.base.title}>
                                                    {item.equipment}
                                                </Heading>
                                                <HStack alignItems="center" mt="-1">
                                                    <Icon as={<ClockAfternoon color={Colors.base.placeholder}/>}/>
                                                    <Text ml="1" fontSize="sm" color={Colors.base.placeholder}>
                                                        20/01/22 às 14h
                                                    </Text>
                                                </HStack>
                                            </Stack>
                                            <Box p="4" borderRadius="full" bg={Colors.base.secondaryShape}>
                                                <Icon as={<Hourglass color={Colors.support.secondary}/>}/>
                                            </Box>
                                        </HStack>
                                    </Box>
                                </Pressable>
                            }/>
                        : <Center p="10">
                                <Icon as={<ChatTeardropText color={Colors.base.placeholder} size="44px"/>}/>          
                                <Text 
                                    mt={8} fontSize="22px" 
                                    lineHeight="36px" fontWeight="400" 
                                    textAlign="center" 
                                    color={Colors.base.placeholder}
                                >Você ainda não tem chamados criados</Text>
                            </Center>
                        )
                    :   (finishedTickets.length > 0 ?            
                            <FlatList mt="5" w="100%" data={finishedTickets} renderItem={({item}) => 
                                <Pressable w="100%" onPress={() => navigation.navigate('Ticket', { ticket: item })} pt="4">
                                    <Box rounded="lg" w="100%" background={Colors.base.primaryShape} overflow="hidden"  borderColor={Colors.product.secondary2} borderLeftWidth="8px">
                                        <HStack p="4" space={3} alignItems="center" justifyContent="space-between">
                                            <Stack space={2}>
                                                <Heading size="md" color={Colors.base.title}>
                                                    {item.equipment}
                                                </Heading>
                                                <HStack alignItems="center" mt="-1">
                                                    <Icon as={<ClockAfternoon color={Colors.base.placeholder}/>}/>
                                                    <Text ml="1" fontSize="sm" color={Colors.base.placeholder}>
                                                        20/01/22 às 14h
                                                    </Text>
                                                </HStack>
                                            </Stack>
                                            <Box p="4" borderRadius="full" bg={Colors.base.secondaryShape}>
                                                <Icon as={<CheckCircle color={Colors.product.secondary2}/>}/>
                                            </Box>
                                        </HStack>
                                    </Box>
                                </Pressable>
                            }/>
                        : <Center p="10">
                                <Icon as={<ChatTeardropText color={Colors.base.placeholder} size="44px"/>}/>          
                                <Text 
                                    mt={8} fontSize="22px" 
                                    lineHeight="36px" fontWeight="400" 
                                    textAlign="center" 
                                    color={Colors.base.placeholder}
                                >Você ainda não tem chamados criados</Text>
                            </Center>
                        )
                    }

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
                            onPress={() => {navigation.navigate('RequestRegister')}}
                        >
                            Nova solicitação
                        </Button>
                    </Box>
                </VStack>
            </Box>
        </View>
    );
};

export default HomeScreen; 