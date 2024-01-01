import BingoCard from '@/components/BingoCard';
import { useListContext } from '@/contexts/ListContext';
import React from 'react'

export default function page() {

    return (
        <main>
            <section className="flex min-h-screen flex-col items-center p-24">
                <BingoCard />
            </section>
        </main>
    )
}
