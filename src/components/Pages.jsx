import '../styles/Pagination.css';

const Pages = ({onPrevious, onNext}) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };
 
  return (
    <nav>
      <ul className='pagination-center'>
        <li className='page-item'>
          <button className='page-link' onClick={handlePrevious}>Previous</button>
        </li>
        <li>
          <button onClick={handleNext}>Next</button>
        </li>
      </ul>
    </nav>
  );
};
export default Pages;
