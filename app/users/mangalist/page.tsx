import React from 'react';
import AnimeListSection from '../base/page';
import styles from './mangalist.module.css';
import SidebarFilter from '../base/leftFilter'

const watchingData = [
  {
    id: 1,
    title: 'VINLAND SAGA SEASON 2',
    score: '6/24',
    progress: '6/24',
    type: 'TV',
    image: 'path/to/image1.jpg',
  },
];

const completedData = [
  {
    id: 2,
    title: 'AKIRA',
    score: 10,
    progress: '1',
    type: 'Movie',
    image: 'path/to/image2.jpg',
  },
];

const DroppedData = [
  {
    id: 2,
    title: 'AKIRA',
    score: 10,
    progress: '1',
    type: 'Movie',
    image: 'path/to/image2.jpg',
  },
];

const PlanningData = [
  {
    id: 2,
    title: 'AKIRA',
    score: 10,
    progress: '1',
    type: 'Movie',
    image: 'path/to/image2.jpg',
  },
];



export default function MangaList() {
  return (
    <main className={styles['containeAll']}>
      <SidebarFilter/>
      <AnimeListSection title="Watching" data={watchingData} />
      <AnimeListSection title="Completed" data={completedData} />
      <AnimeListSection title="Dropped" data={DroppedData} />
      <AnimeListSection title="Planning" data={PlanningData} />
    </main>
  );
}
