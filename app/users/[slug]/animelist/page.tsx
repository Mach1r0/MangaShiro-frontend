import React from 'react';
import BaseListSection from '@/app/users/base/content.tsx';
import styles from '../css/animelist.module.css';
import SidebarFilter from '../../base/leftFilter'
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

export default function AnimeListSection() {
  return (
    <main className={styles['containeAll']}>
      <SidebarFilter/>
      <div className={styles['containerStatus']}>
        <BaseListSection title="Watching" data={watchingData} />
        <BaseListSection title="Completed" data={completedData} />
        <BaseListSection title="Dropped" data={DroppedData} />
        <BaseListSection title="Planning" data={PlanningData} />
      </div>
    </main>
  );
}
