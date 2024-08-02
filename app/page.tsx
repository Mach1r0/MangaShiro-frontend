"use client";
import "./globals.css";
import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import Link from "next/link";

async function getData() {
  try {
    const [responseAnime, responseManga] = await Promise.all([
      fetch("http://localhost:8000/anime/Highest-anime/"), 
      fetch("http://localhost:8000/manga/highest-rated-manga/"), 
    ]);
    console.log("oi ", responseAnime)
    console.log("oi ", responseManga)
    if (!responseAnime.ok || !responseManga.ok) {
      throw new Error("Failed to fetch data");
    }

    const [dataAnime, dataManga] = await Promise.all([
      responseAnime.json(),
      responseManga.json(),
    ]);

    return { anime: dataAnime, manga: dataManga };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { anime: [], manga: [] };
  }
}


export default function Home() {
  const [data, setData] = useState({ anime: [], manga: [] });
  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    let isMounted = true;

    getData().then((data) => {
      if (isMounted) setData(data);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main>
      <div className={styles["container-body"]}>
        <div className={styles["container-header"]}>
          <h1> Wellcome to MangaShiro </h1>
        </div>
        <div className={styles["container-content"]}>
          <div className={styles["container-anime"]}>
            <h1>BEST ANIMES</h1>
            <div className={styles["container-anime-images"]}>
              {data.anime.map((anime) => (
                <div key={anime.id}>
                <img src={`${BASE_URL}${anime.image}`} alt={anime.title || "Anime image"} />
                <Link href={`/anime/${anime.title}`}>
                    <p>{anime.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className={styles["container-manga"]}>
            <h1>BEST MANGAS</h1>
            <div className={styles["container-manga-images"]}>
              {data.manga.map((manga) => (
                <div key={manga.id}>
                  <img src={`${BASE_URL}${manga.image}`} alt={manga.title || "manga image"} />
                  <Link href={`/manga/${manga.title}`}>
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
}