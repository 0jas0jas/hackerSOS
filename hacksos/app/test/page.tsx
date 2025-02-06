'use client'

import React from 'react';
import MakeIssue from '@/components/makeIssue';
import LoginButton from '@/components/ghLogin';
import { useSearchParams } from 'next/navigation';

const TestPage: React.FC = () => {

  const searchParams = useSearchParams();
  const accessToken = searchParams.get('access_token');

  if (!accessToken) {
      return <div>Please log in to create an issue.</div>;
  }

  
  return (
    <div>
      <h1> Is this working </h1>
      <LoginButton />
      <MakeIssue title="Test Issue" description="This is a test issue." accessToken={''} />
    </div>
  );
};

export default TestPage;