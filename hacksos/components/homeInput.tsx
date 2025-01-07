'use client';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import Link from 'next/link';
import React, { useState } from 'react';

const HomeInput: React.FC = () => {
    const [message, setMessage] = useState('');

    return (
        <div>
            <div className="flex w-2/3 flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input
                    placeholder="Enter your message"
                    type="text"
                    value={message}
                    variant="flat"
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <div style={{ marginTop: "30px" }}>
                <Link href={
                    {
                        pathname: '/issue',
                        query: { message: message }
                    }
                }>
                    <Button>
                        Continue
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default HomeInput;