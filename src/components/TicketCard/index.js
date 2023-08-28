import React from "react";
import { 
  Box,
  HStack,
  Heading,
  Text,
  Pressable,
  Icon,
  Stack
} from "native-base";
import Colors from "../../theme/Colors";
import { ClockAfternoon, Hourglass, CheckCircle } from "phosphor-react-native";
import moment from 'moment';

const TicketCard = ({ navigation, ticket }) => {
    const status = ticket.status ?? 'ONGOING'

    return (
        <Pressable w="100%" onPress={() => navigation.navigate('Ticket', { ticket: ticket })} pt="4">
            <Box 
                rounded="lg" w="100%" 
                background={Colors.base.primaryShape} overflow="hidden"  
                borderColor={
                    status === 'ONGOING'  
                    ? Colors.support.secondary
                    : Colors.product.secondary2
                } borderLeftWidth="8px"
            >
                <HStack p="4" space={3} alignItems="center" justifyContent="space-between">
                    <Stack space={2}>
                        <Heading size="md" color={Colors.base.title}>
                            {ticket.equipment}
                        </Heading>
                        <HStack alignItems="center" mt="-1">
                            <Icon as={<ClockAfternoon color={Colors.base.placeholder}/>}/>
                            <Text ml="1" fontSize="sm" color={Colors.base.placeholder}>
                                {moment(ticket.created_at).format("DD/MM/YYYY") + " às " + moment(ticket.created_at).format("HH") + "h"}
                            </Text>
                        </HStack>
                    </Stack>
                    <Box p="4" borderRadius="full" bg={Colors.base.secondaryShape}>
                        {
                            status === 'ONGOING'
                            ? <Icon as={<Hourglass color={Colors.support.secondary}/>}/>
                            : <Icon as={<CheckCircle color={Colors.product.secondary2}/>}/>
                        }
                    </Box>
                </HStack>
            </Box>
        </Pressable>           
    );
};

export default TicketCard; 