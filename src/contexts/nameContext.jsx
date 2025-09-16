import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const nameContext = createContext(null);

export const NameProvider = ({ children }) => {
  const [name, setName] = useState('Anonymous');

  return (
    <nameContext.Provider value={{ name, setName }}>
      {children}
    </nameContext.Provider>
  );
};
