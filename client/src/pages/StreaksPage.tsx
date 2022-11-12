import { useState, useEffect } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import ContentWrapper from '../components/elements/ContentWrapper';

import { fetchStreaks } from '../functions/fetchFunctions';

import type { Streak } from '../../../typings/streakTypes';

const StreaksPage = (): JSX.Element => {
  const [streaks, setStreaks] = useState<Streak[]>([]);

  useEffect(() => {
    fetchStreaks().then(streaks => setStreaks(streaks));
  }, []);

  return (
    <DefaultLayout>
      <ContentWrapper>
        <h1>Streaks</h1>
        <h2>Your streaks</h2>
        {streaks.map(streak => (
          <div key={streak.streak_id}>
            <h3>{streak.title}</h3>
            <p>{streak.days} days</p>
          </div>
        ))}
      </ContentWrapper>
    </DefaultLayout>
  );
}

export default StreaksPage;
