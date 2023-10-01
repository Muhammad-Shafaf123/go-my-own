import { createContext, useContext, useState } from "react";

const homeContext = createContext()

export function HomeContextProvider ({ children }) {
    const [ displayType, setDisplayType ] = useState('grid');
    
    const value = {
        displayType,
        setDisplayType,
    };

    return (
        <homeContext.Provider value={ value }>
          { children }
        </homeContext.Provider>
      );
}

export function useHomeContext() {
    return useContext(homeContext);
}
