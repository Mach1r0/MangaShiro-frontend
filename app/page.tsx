'use client';
import "./globals.css";
import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
import Link from "next/link";

async function getData() {
  try {
    const [responseAnime, responseManga] = await Promise.all([
      fetch('http://localhost:8000/anime/'),
      fetch('http://localhost:8000/manga/'),
    ]);

    if (!responseAnime.ok || !responseManga.ok) {
      throw new Error('Failed to fetch data');
    }

    const [dataAnime, dataManga] = await Promise.all([
      responseAnime.json(),
      responseManga.json(),
    ]);

    return { anime: dataAnime, manga: dataManga };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { anime: [], manga: [] };
  }
}

export default function Home() {
  const [data, setData] = useState({ anime: [], manga: [] });

  useEffect(() => {
    let isMounted = true;

    getData().then(data => {
      if (isMounted) setData(data);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main>
      <div className={styles['container-body']}>
        <div className={styles['container-header']}>
          <div className={styles['container-search']}>
            <p> Search </p>
            <input type="text" />
          </div>

          <div className={styles['container-gender']}>
            <p> Gender </p>
            <input type="text" />
          </div>

          <div className={styles['container-year']}>
            <p> Year </p>
            <input type="text" />
          </div>
        </div>
        <div className={styles['container-content']}>
          <div className={styles['container-anime']}>
            <h1>BEST ANIME</h1>
            <div className={styles['container-anime-images']}>
              {data.anime.map((anime) => (
                <div key={anime.id}>
                  <img src={anime.image} alt={anime.title || 'Anime image'} />
                  <Link href={anime.title}>
                    <p>{anime.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className={styles['container-manga']}>
            <h1>BEST MANGA</h1>
            <div className={styles['container-manga-images']}>
              {data.manga.map((manga) => (
                <div key={manga.id}>
                  <img src={manga.image} alt={manga.title || 'Manga image'} />
                  <Link href={manga.title}>
                    <p>{manga.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};