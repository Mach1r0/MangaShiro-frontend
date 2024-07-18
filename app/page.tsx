'use client'; 
import "./globals.css";
import React, { useEffect, useState } from 'react'; 
import Link from 'next/link';
import styles from './home.module.css';

async function getData() { 
  const responseAnime = await fetch('http://localhost:8000/anime/'); 
  const responseManga = await fetch('http://localhost:8000/manga/'); 
  if (!responseAnime.ok || !responseManga.ok) { 
      console.error('Error on fetch data');  
      return { anime: [], manga: [] }; 
  } 
  
  const dataAnime = await responseAnime.json(); 
  const dataManga = await responseManga.json(); 
  console.log("oi", dataAnime);
  console.log("oi2", dataManga);
  return { anime: dataAnime, manga: dataManga }; 
}

export default function Home(){
  const [data, setData] = useState({ anime: [], manga: [] }); 

  useEffect(() => { 
      getData().then(setData); 
  }, []); 

  return (
    <main>
      <div className={styles['container-body']}>

        <div className={styles['container-header']}>

          <div className={styles['container-search']}>
            <p> Search </p>
            <input type="text" />
          </div>
          
          <div className={styles['container-Gender']}>
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
              {data.anime.map((anime) => (
                <p key={anime.id}>{anime.title}</p>
              ))}
            </div>

            <div className={styles['container-manga']}>
              <h1>Best Manga</h1>
              {data.manga.map((manga) => (
                <p key={manga.id}>{manga.title}</p>
              ))}
            </div>
        </div>
      </div>        

     </main>
  );
};