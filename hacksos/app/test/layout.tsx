'use client'
import React from 'react';
import { SessionProvider } from 'next-auth/react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <SessionProvider>
            <div className="relative flex flex-col h-screen">
                {children}
            </div>
        </SessionProvider>
    );
};

export default Layout;