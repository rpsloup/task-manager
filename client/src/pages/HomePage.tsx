import DefaultLayout from '../layouts/DefaultLayout';
import ContentWrapper from '../components/elements/ContentWrapper';
import Icon from '../components/elements/Icon';

const HomePage = (): JSX.Element =>
  (
    <DefaultLayout>
      <ContentWrapper>
        <h1>Home</h1>
        <Icon name="paper-plane" type="fas" />
      </ContentWrapper>
    </DefaultLayout>
  );

export default HomePage;
