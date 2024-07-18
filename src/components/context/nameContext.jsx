import { createContext } from 'react';
import { useContext, useState } from 'react';

const NameContext = createContext();

export const useName = () => {
  const context = useContext(NameContext);
  console.log(context);
  return context;
};

export const NameProvider = ({ children }) => {
  const [restaurantName, setRestaurantName] = useState('');

  const handleRestaurantNameChange = (name) => setRestaurantName(name);

  return (
    <NameContext.Provider
      value={{ restaurantName, handleRestaurantNameChange }}
    >
      {children}
    </NameContext.Provider>
  );
};
