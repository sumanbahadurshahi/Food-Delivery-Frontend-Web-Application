import { useState, createContext } from "react";

export const DataContext = createContext();

const UserContext = ({ children }) => {
  const [input, setInput] = useState("");

  return (
    <DataContext.Provider value={{ input, setInput }}>
      {children}
    </DataContext.Provider>
  );
};

export default UserContext;
