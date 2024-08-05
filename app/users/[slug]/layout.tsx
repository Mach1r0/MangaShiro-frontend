'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NavbarProfile from '../base/navbar';
import Navbar  from '@/app/base/navbar/page';
import Profile from './page';

const Layout = ({ children, params }: { children: React.ReactNode, params: { slug: string } }) => {
  const router = useRouter();
  const { slug } = params;

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (slug) {
        console.log('oi', slug);
        try {
          const response = await fetch(`http://localhost:8000/user/${slug}/`);
          const data = await response.json();
          setUser(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [slug]);

  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Profile params ={slug} />
        <NavbarProfile slug={slug} />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
