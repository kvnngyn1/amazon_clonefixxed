import React, {createContext, useContext, useReducer } from 'react';

// create data
export const StateContext = createContext();

// sort of like an internal database and directions to use said database
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull data from database
export const useStateValue = () => useContext(StateContext);