import './ContentWrapper.styles.scss';

type Props = {
  children: React.ReactNode;
};

const ContentWrapper = ({ children }: Props): JSX.Element =>
  (
    <div className="content-wrapper">
      {children}
    </div>
  );

export default ContentWrapper;
