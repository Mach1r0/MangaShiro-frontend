import React from 'react';
import styles from './navbar/Navbar.module.css';

export default function Navbar() {
  return (
    <div>
        <ul className={styles['container-all']}>
            <li>
                <p> Home </p>
            </li>
            <li>
                <p> Manga list </p>
            </li>
            <li>
                <p> Anime list </p>
            </li>
            <li>
                <p> Search </p>
            </li>
            <li>
                <p> Profile </p>
            </li>
        </ul>
    </div>
  );
}
