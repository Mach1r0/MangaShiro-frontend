'use client';
import React, { useEffect, useState } from 'react';
import Style from './manga.module.css';

async function getData() {
    let data;
    const result = await fetch('http://localhost:8000/anime/');
    try {
        data = await result.json();
    } catch (error) {
        console.error("error fetch", error);
        return null;
    }
    console.log("oi", data);
    return data;
}

export default function SearchManga() {
    const [animeData, setAnimeData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setAnimeData(data);
        };
        fetchData();
    }, []);

    return (
        <main>
            <div className={Style['Container-all']}>
                <div className={Style['container-header']}>
                    <div className={Style['container-search']}>
                        <p> Search </p>
                        <input type="text" />
                    </div>
                    
                    <div className={Style['container-genrer']}>
                        <p> Genres </p>
                        <input type="text" />
                    </div>

                    <div className={Style['container-year']}>
                        <p> Year </p>
                        <input type="text" />
                    </div>
                </div>
                <div className={Style['container-content']}>
                    <h1>Anime List</h1>
                    {/* Map over animeData to render each anime */}
                    {animeData && animeData.map(anime => (
                        <div key={anime.id} className={Style['container-anime']}>
                            <img src={anime.image} alt={anime.title} />
                            <p>{anime.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
