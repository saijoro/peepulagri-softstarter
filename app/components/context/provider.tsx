import React, { createContext, useState, useEffect, useContext } from 'react';

interface PondsnavContextType {
    searchString: string;
    setSearchString: React.Dispatch<React.SetStateAction<string>>;
    debounceSearchString: string;
}

const PondsnavContext = createContext<PondsnavContextType | undefined>(undefined);

export const usePondsnavContext = () => {
    const context = useContext(PondsnavContext);
    if (!context) {
        throw new Error('usePondsnavContext must be used within a PondsnavProvider');
    }
    return context;
};

export const PondsnavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [searchString, setSearchString] = useState<string>('');
    const [debounceSearchString, setDebounceSearchString] = useState<string>('');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceSearchString(searchString);
        }, 1000);

        return () => clearTimeout(handler);
    }, [searchString]);

    return (
        <PondsnavContext.Provider value={{ searchString, setSearchString, debounceSearchString }}>
            {children}
        </PondsnavContext.Provider>
    );
};