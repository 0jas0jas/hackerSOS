'use client';

import React from 'react';
import { useSession } from "next-auth/react";
import MakeIssue from '../../components/makeIssue';
import LoginButton from '../../components/ghLogin';

const TestPage: React.FC = () => {
    const { data: session } = useSession();

    if (!session) {
        return (
            <div>
                <LoginButton />
                <p>Please log in to create an issue.</p>
            </div>
        );
    }

    return (
        <div>
            <MakeIssue title="Test Issue" description="This is a test issue." accessToken={session.accessToken} />
        </div>
    );
};

export default TestPage;