import React from 'react';
import styles from './Navbar.module.css';
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles['container-all']}>
        <ul className={styles['container-list']}>
            <div className={styles['container-nav']}>
            <li>
                <Link href="/" legacyBehavior>
                    <a className={styles['container-links']}> Home </a>
                </Link>            
            </li>
            <li>
                <Link href="/search" legacyBehavior>
                <a className={styles['container-links']}> Search </a>
                </Link>
            </li>
            <li>
                <Link href="/manga" legacyBehavior>
                    <a className={styles['container-links']}>Manga list</a>
                </Link>
            </li>
            <li>
                <Link href="/anime" legacyBehavior>
                    <a className={styles['container-links']}>Anime list</a>
                </Link>
            </li>
            </div>
        </ul>
        <div className={styles['container-profile']}>
            <Link href="/profile" legacyBehavior>
                 <a className={styles['container-links']}>Profile</a>
            </Link>
        </div>
    </div>
  );
}
