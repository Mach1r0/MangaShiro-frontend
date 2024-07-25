import React from 'react';
import styles from '../mangalist/mangalist.module.css';

const BaseListSection = ({ title, data }) => {
  return (
    <div className={styles['containerSection']}>
      <h2>{title}</h2>
      <div className={styles['listContainer']}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Score</th>
              <th>Progress</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map((anime) => (
              <tr key={anime.id}>
                <td>
                  <img src={anime.image} alt={anime.title} className={styles['animeImage']} />
                  {anime.title}
                </td>
                <td>{anime.score}</td>
                <td>{anime.progress}</td>
                <td>{anime.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BaseListSection;
