'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Style from './css/slug.module.css'
import NavbarProfile from '@/app/base/navbar/page'

const Profile = ({ params }) => {
  const router = useRouter();
  const { slug } = params;

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (slug) {
        console.log('Slug:', slug);
        try {
          const response = await fetch(`http://localhost:8000/user/${slug}/`);
          console.log('Response:', response);
          const data = await response.json();
          console.log('Data:', data);
          setUser(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [slug]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className={Style['container-all']}>
        <div className={Style['container-header']}>
          <h1>User Profile: {user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Nickname: {user.nickname}</p>
        </div>
      </div>
    </main>
  );
};

export default Profile;
