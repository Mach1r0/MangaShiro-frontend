// app/layout.tsx
import React from 'react';
import './globals.css'; 
import Navbar from './base/navbar/page';
import Footer from './base/footer/page';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default Layout;
