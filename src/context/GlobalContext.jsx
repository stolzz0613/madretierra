/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext, useEffect } from 'react';
import { GET_PROPERTIES } from '../queries';
import { useQuery } from '@apollo/client';

const initialState = {
  properties: [],
  isFiltering: false,
};

const GlobalStateContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PROPERTIES':
      return { ...state, properties: action.payload?.filter(n => n?.obtenerPrecio !== null ) };
    case 'SET_FILTERING':
      return { ...state, isFiltering: action.payload }
    default:
      return state;
  }
};

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const res = useQuery(GET_PROPERTIES);

  useEffect(() => {
    const nodes = res?.data?.allPropiedades?.nodes;
    dispatch({ type: 'SET_PROPERTIES', payload: nodes });
  }, [res])

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState debe ser utilizado dentro de un GlobalStateProvider');
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
