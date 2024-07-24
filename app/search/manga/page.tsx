import React from 'react'
import Style from './manga.module.css'

export default function SearchManga() {
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
                <div className={Style['container-']}>
                        <img src="/" alt="/" />
                        <p> anime name</p>
                </div>
            </div>
        </div>
    </main>
  )
}
