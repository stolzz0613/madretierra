/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext, useEffect } from 'react';
import { GET_PROPERTIES } from '../queries';
import { useQuery } from '@apollo/client';

const initialState = {
  properties: [],
  isFiltering: false,
};

const GlobalStateContext = createContext();

function ordenarPorPrecio(propiedades) {
  propiedades.sort((propiedadA, propiedadB) => {
      return propiedadA.obtenerPrecio[0].GET_PROPIEDADES.precio - propiedadB.obtenerPrecio[0].GET_PROPIEDADES.precio;
  });

  return propiedades;
}

function ordenarPorPrecioASC(propiedades) {
  propiedades.sort((propiedadA, propiedadB) => {
      return propiedadB.obtenerPrecio[0].GET_PROPIEDADES.precio - propiedadA.obtenerPrecio[0].GET_PROPIEDADES.precio;
  });

  return propiedades;
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PROPERTIES':
      return { ...state, properties: action.payload?.filter(n => n?.obtenerPrecio !== null ) };
    case 'SET_FILTERING':
      return { ...state, isFiltering: action.payload }
    case 'DESC_ORDER':
      return { ...state, properties: ordenarPorPrecio(state.properties) };
    case 'ASC_ORDER':
      return { ...state, properties: ordenarPorPrecioASC(state.properties) };
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
