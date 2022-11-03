import { useState, useEffect } from 'react';
import { fetchStreaks } from '../functions/fetchFunctions';

import DefaultLayout from '../layouts/DefaultLayout';

import type { Streak } from '../../../typings/streakTypes';

const HomePage = (): JSX.Element => {
  const [streaks, setStreaks] = useState<Streak[]>([]);

  useEffect(() => {
    fetchStreaks().then(streaks => setStreaks(streaks));
  }, []);

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <h2>Your streaks</h2>
      {streaks.map(streak => (
        <div key={streak.streak_id}>
          <h3>{streak.title}</h3>
          <p>{streak.days} days</p>
        </div>
      ))}
    </DefaultLayout>
  );
}

export default HomePage;
