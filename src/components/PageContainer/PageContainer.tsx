import "./PageContainer.css";

interface PageContainerProps {
  children: React.ReactNode;
}
const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <div className='pageContainer'>{children}</div>;
};

export default PageContainer;
