import React from 'react';
import styles from './Navbar.module.css';
import Link from "next/link";
import Head from 'next/head'; 

export default function Navbar() {
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
              <Link href="/users/mangalist" legacyBehavior>
                <a className={styles['container-links']}>Manga List</a>
              </Link>
            </li>
            <li>
              <Link href="/users/animelist" legacyBehavior>
                <a className={styles['container-links']}>Anime List</a>
              </Link>
            </li>
          </div>
        </ul>
        <div className={styles['container-profile']}>
          <Link href="/user" legacyBehavior>
            <a className={styles['container-links']}>Profile</a>
          </Link>
        </div>
      </div>
    </>
  );
}
