"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/topics/${searchTerm}`);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    return (
        <div className='flex justify-center items-center text-xl space-x-3 mt-4'>
            <h1>Search Images</h1>
            <form onSubmit={handleSubmit} className='space-x-3'>
                <input type="text" value={searchTerm} onChange={handleInputChange} className='border-2 border-black rounded-lg p-1'/>
                <button type="submit" className='border-2 border-black rounded-lg hover:border-blue-400 hover:bg-blue-400 hover:text-white p-1'>Search</button>
            </form>
        </div>
    );
}

export default page