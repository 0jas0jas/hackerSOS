import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <main>
                {children}
            </main>
            {/* <footer>
                <p>&copy; {new Date().getFullYear()} HackerSOS</p>
            </footer> */}
        </div>
    );
};

export default Layout;