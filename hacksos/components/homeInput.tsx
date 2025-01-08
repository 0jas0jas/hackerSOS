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
            <Input
                className='w-1/2 rounded-r-none'
                placeholder="Enter your message"
                type="text"
                value={message}
                variant="flat"
                onChange={(e) => setMessage(e.target.value)}
                size='lg'
                radius='none'
                onKeyDown={handleKeyDown}
            />
            {message.trim() !== '' ? (
                <Link
                    href={{
                        pathname: '/issue',
                        query: { message }
                    }}
                >
                    <Button className="rounded-l-none" size="lg">
                    </Button>
                </Link>
            ) : (
                // Button is rendered but disabled when message is empty
                <Button className="rounded-l-none" size="lg" disabled>
                </Button>
            )}
        </div>
    );
};

export default HomeInput;

