'use client';
import React, { useEffect, useState } from 'react';
import styles from './css/NavbarProfile.module.css';
import Link from 'next/link';
import Head from 'next/head';

const Navbar = ({ slug }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (slug) {
        try {
          const response = await fetch(`http://localhost:8000/user/${slug}/`);
          const data = await response.json();
          setUser(data);
        } catch (error) {
          console.error('Error fetching data', error);
        }
      }
    };
    fetchData();
  }, [slug]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles['container-all']}>
        <ul className={styles['container-list']}>
          <div className={styles['container-nav']}>
            <li key="overview">
              <Link href={`/users/${slug}/`} legacyBehavior>
                <a className={styles['container-links']}>Overview</a>
              </Link>
            </li>
            <li key="mangalist">
              <Link href={`/users/${slug}/mangalist`} legacyBehavior>
                <a className={styles['container-links']}>Manga List</a>
              </Link>
            </li>
            <li key="animelist">
              <Link href={`/users/${slug}/animelist`} legacyBehavior>
                <a className={styles['container-links']}>Anime List</a>
              </Link>
            </li>
            <li key="favorites">
              <Link href={`/users/${slug}/favorites`} legacyBehavior>
                <a className={styles['container-links']}>Favorites</a>
              </Link>
            </li>
            <li key="reviews">
              <Link href={`/users/${slug}/reviews`} legacyBehavior>
                <a className={styles['container-links']}>Reviews</a>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
