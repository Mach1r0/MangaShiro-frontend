// pages/users/[userName].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UserPage = () => {
  const router = useRouter();
  const { userName } = router.query;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userName) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(`http://localhost:8000/users/${userName}`);
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          setUserData(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };

      fetchUserData();
    }
  }, [userName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User: {userName}</h1>
      {userData && (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserPage;
