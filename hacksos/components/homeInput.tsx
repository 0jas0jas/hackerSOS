'use client';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import Link from 'next/link';
import React, { useState } from 'react';

const HomeInput: React.FC = () => {
    const [message, setMessage] = useState('');
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && message.trim() !== '') {
            window.location.href = `/issue?message=${message}`;
        }
    }

    return (
        <div className="flex flex-auto items-start justify-center" style={{ textAlign: 'center', minHeight: '200px' }}>
            <input
            className="input rounded-r-none input-bordered input-md w-1/2 focus:outline-none focus:ring-0"
            placeholder="Type your issue here"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            />
            {message.trim() !== '' ? (
            <Link
            className='w-1/12'
            href={{
            pathname: '/issue',
            query: { message }
            }}
            >
            <button className="btn rounded-l-none w-full">
            </button>
            </Link>
            ) : (
            // Button is rendered but disabled when message is empty
            <button className="btn btn-md rounded-l-none w-1/12" disabled={true}>
            </button>
            )}
        </div>
    );
};

export default HomeInput;

