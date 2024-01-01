"use client"
import { useListContext } from '@/contexts/ListContext';
import React, { useEffect, useState } from 'react'
import StarIcon from './icons/StarIcon';

export default function BingoCard() {
    const {
        //@ts-ignore
        inputText,
        //@ts-ignore
        items,
        //@ts-ignore
        handleInputChange,
        //@ts-ignore
        handleAddItem,
        //@ts-ignore
        handleRemoveItem,
    } = useListContext();

    const year = '2024';

    const yearArray = year.split('');
    const [randomizedItems, setRandomizedItems] = useState([]);

    useEffect(() => {
        // Function to shuffle the array
        const shuffleArray = (array: any) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };
    
        // Shuffle the items
        const shuffledItems = shuffleArray(items);
    
        // Generate a random index for inserting "Free Space"
        const randomIndex = Math.floor(Math.random() * (shuffledItems.length + 1));
    
        // Insert "Free Space" at the random index
        const itemsWithIcon: any = [
            ...shuffledItems.slice(0, randomIndex),
            <StarIcon key="free-space" />,
            ...shuffledItems.slice(randomIndex),
        ];
    
        setRandomizedItems(itemsWithIcon);
      }, [items, StarIcon]);

    return (
        <div className='grid grid-cols-4 gap-4'>
            {yearArray.map((char: string, index: number) => (
                <span 
                    key={index}
                    className='bg-zinc-300 dark:bg-zinc-800 rounded-lg px-4 py-2 text-6xl font-bold aspect-square flex items-center justify-center w-full h-16'
                >
                    {char}
                </span>
            ))}
            {randomizedItems.map((item: string, index: number) => (
                <div key={index} className='flex justify-center items-center bg-zinc-300 dark:bg-zinc-800 rounded-lg p-2 h-32 w-32 font-semibold text-center capitalize'>
                    {item}
                </div>
            ))}
        </div>  
    )
}
