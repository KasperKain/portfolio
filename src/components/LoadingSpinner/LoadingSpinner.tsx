import "./loadingSpinner.css";

const loadingSpinner: React.FC = () => {
  return (
    <div className='LoadingSpinnerContainer'>
      <div className='LoadingSpinner'>
        <p></p>
      </div>
    </div>
  );
};

export default loadingSpinner;
