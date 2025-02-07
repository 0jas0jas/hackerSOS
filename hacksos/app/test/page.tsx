'use client';

import React from 'react';
import { useSession } from "next-auth/react";
import MakeIssue from '../../components/makeIssue';
import LoginButton from '../../components/ghLogin';
import ListIssues from '@/components/listIssues';

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
            <MakeIssue title="Test Issue" description="This is a test issue." accessToken={(session as any).accessToken} />
            <ListIssues repoUrl="0jas0jas/hackerSOS" />
        </div>
    );
};

export default TestPage;