// src/app/layout.tsx
import React from 'react';
import Providers from './providers';
import './globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900">
        <Providers>
          <main className="min-h-screen flex flex-col items-center justify-center p-6">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default Layout;