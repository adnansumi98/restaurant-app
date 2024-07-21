import { createContext, useState } from 'react';

export const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [restaurantName, setRestaurantName] = useState('');

  return (
    <NameContext.Provider value={{ restaurantName, setRestaurantName }}>
      {children}
    </NameContext.Provider>
  );
};
