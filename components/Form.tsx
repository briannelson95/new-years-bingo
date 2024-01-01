"use client"

import React, { useState } from 'react'
import XIcon from './icons/XIcon';
import { useListContext } from '@/contexts/ListContext';
import { useRouter } from 'next/navigation';

export default function Form() {
    const router = useRouter();
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

    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
          handleAddItem();
        }
    };

    return (
        <div className='space-y-2'>
            <div className='flex justify-center items-center'>
                <span className='text-2xl font-bold'>{items.length}/15</span>
            </div>
            <button
                onClick={() => router.push('/my-bingo')}
                className='bg-green-400 text-white px-4 py-2 rounded-lg w-full disabled:bg-green-900 disabled:text-zinc-400'
                disabled={items.length < 15}
            >
                Create Bingo Card
            </button>
            <div className='flex gap-2'>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    className='bg-transparent rounded-lg p-2 border border-zinc-500 dark:border-zinc-300'
                />
                <button 
                    onClick={handleAddItem}
                    className='bg-zinc-900 text-white px-4 py-2 rounded-lg dark:bg-white dark:text-black disabled:bg-zinc-400 disabled:text-zinc-300'
                    disabled={items.length >= 15}
                >
                    Add
                </button>
            </div>
            <ul className='space-y-2'>
                {items.map((item: string, index: number) => (
                    <div key={index} className='flex justify-between w-full bg-zinc-300 dark:bg-zinc-800 rounded-lg p-2'>
                        <li>{item}</li>
                        <button onClick={() => handleRemoveItem()}>
                            <XIcon />
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    )
}
