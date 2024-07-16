import "./globals.css";
import Link from 'next/link'
import styles from './home.module.css'

export default function Home(){
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

            </div>

            <div className={styles['container-manga']}>
              <h1>Best Manga </h1>

            </div>
        </div>
      </div>        

     </main>
  );
};
