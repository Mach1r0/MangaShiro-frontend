import React from 'react';
import Style from '@/app/search/anime/manga_search.module.css';
import Link from 'next/link';
import "@/app/globals.css";
async function getData() {
  const animelist = await fetch('http://localhost:8000/anime/');
  const data = await animelist.json();
  return data;
}

export default async function MangaPage() {
  const animedata = await getData();
  return (
    <main>
      <div className={Style['container-all']}>
        <div className={Style['container-header']}>
          <div className={Style['container-search']}>
            <h1>Search</h1>
            <input type="text" />
          </div>

          <div className={Style['container-search']}>
            <h1>Genres</h1>
            <input type="text" />
          </div>

          <div className={Style['container-search']}>
            <h1>Year</h1>
            <input type="text" />
          </div>
        </div>

        <div className={Style['container-content']}>
          <h1>Anime List</h1>
          <div className={Style['anime-list']}>
            {animedata.map((anime) => (
              <div key={anime.id} className={Style['container-anime']}>
                <img src={anime.image} alt={anime.title} />
                <Link href={anime.title}>
                  <p>{anime.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
