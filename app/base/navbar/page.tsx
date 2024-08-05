'use client';
import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

const fetchUserData = async (slug) => {
  try {
    const token = getCookie('accessToken');
    console.log('Token:', token);
    const response = await fetch(`http://localhost:8000/user/${slug}/`, {
      method: 'GET',
      headers: {
        'Authorization': token ? `Bearer ${token}` : '', 
      },
      credentials: 'include',
    });
    console.log('Response Status:', response.status); 
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to fetch user data');
    }
  } catch (error) {
    console.error('Fetch user data error:', error);
    return null;
  }
};


const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

const Navbar = ({ slug ,isAuthenticated }) => {
  const router = useRouter();
  const slug = params?.slug;
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (slug) {
      console.log('Fetching user data for slug:', slug);
      fetchUserData(slug).then((data) => {
        console.log('User data:', data);
        if (data) {
          setUser(data);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      });
    }
  }, [slug]);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>
      {isAuthenticated ? (
        <div className={styles['container-all']}>
          <ul className={styles['container-list']}>
            <div className={styles['container-nav']}>
              <li>
                <Link href="/" legacyBehavior>
                  <a className={styles['container-links']}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/search/anime" legacyBehavior>
                  <a className={styles['container-links']}>Search</a>
                </Link>
              </li>
              <li>
                <Link href={`/users/${slug}/mangalist`} legacyBehavior>
                  <a className={styles['container-links']}>Manga List</a>
                </Link>
              </li>
              <li>
                <Link href={`/users/${slug}/animelist`} legacyBehavior>
                  <a className={styles['container-links']}>Anime List</a>
                </Link>
              </li>
            </div>
          </ul>
          <div className={styles['container-profile']}>
            <Link href={`/users/${slug}`} legacyBehavior>
              <a className={styles['container-links']}>Profile</a>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles['container-all']}>
          <ul className={styles['container-list']}>
            <div className={styles['container-nav']}>
              <li>
                <Link href="/" legacyBehavior>
                  <a className={styles['container-links']}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/search/anime" legacyBehavior>
                  <a className={styles['container-links']}>Search</a>
                </Link>
              </li>
              <li>
                <Link href="/login" legacyBehavior>
                  <a className={styles['container-links']}>Login</a>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
