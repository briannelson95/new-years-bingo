"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';

const ListContext = createContext({});

export const useListContext = () => {
    return useContext(ListContext);
};

export const ListProvider = ({ children }: { children: React.ReactNode}) => {
    const [inputText, setInputText] = useState('');
    const [items, setItems]: any = useState([]);

    const ls = typeof window !== 'undefined' ? window.localStorage : null;

    useEffect(() => {
        if (ls) {
            const storedItems = ls.getItem('items');
            if (storedItems !== null) {
                try {
                    setItems(JSON.parse(storedItems));
                } catch (error) {
                    console.error('Error parsing stored items:', error);
                }
            }
        }
    }, []);

    function saveItemsToLocalStorage(items: any) {
        if (ls) {
            ls.setItem('items', JSON.stringify(items))
        }
    }

    const handleInputChange = (e: any) => {
        setInputText(e.target.value);
    };

    const handleAddItem = () => {
        if (items.length >= 15) return;
        if (inputText.trim() !== '') {
            const updatedItems = [...items, inputText];
            setItems(updatedItems);
            saveItemsToLocalStorage(updatedItems);
            setInputText('');
        }
    };

    const handleRemoveItem = (index: number) => {
        setItems((prevItems: any) => {
            const updatedItems = [...prevItems];
            updatedItems.splice(index, 1);
            saveItemsToLocalStorage(updatedItems)
            return updatedItems;
        });
    };

    const contextValue = {
        inputText,
        items,
        handleInputChange,
        handleAddItem,
        handleRemoveItem,
    };

    return (
        <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
    );
};
