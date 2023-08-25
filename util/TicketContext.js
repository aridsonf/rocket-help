import React, { createContext, useState, useContext } from 'react';

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([
    {
        id: 1,
        equipment: "Patrimônio 1",
        problem: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        solution: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        status: "FINISHED"
    },
    {
        id: 2,
        equipment: "Patrimônio 2",
        problem: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        solution: null,
        status: "ONGOING"
    },
  ]);

  const updateTicket = (newTicket) => {
    setTickets(oldTickets => [...oldTickets, newTicket]);
  };

  const giveSolution = (ticketId, solution) => {
    setTickets((prevState) =>
      prevState.map((item) => {
        if (item.id === ticketId) {
          return {
            ...item,
            solution: solution,
            status: "FINISHED",
          };
        }
        return item;
      })
    );
  } 

  return (
    <TicketContext.Provider value={{ tickets, updateTicket, giveSolution }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicketContext = () => {
  return useContext(TicketContext);
};





