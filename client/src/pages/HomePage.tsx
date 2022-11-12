import DefaultLayout from '../layouts/DefaultLayout';
import Icon from '../components/elements/Icon';

const HomePage = (): JSX.Element =>
  (
    <DefaultLayout>
      <h1>Home</h1>
      <Icon name="paper-plane" type="fas" />
    </DefaultLayout>
  );

export default HomePage;
