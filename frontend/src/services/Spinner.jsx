import Spinner from 'react-bootstrap/Spinner';

const GrowExample = () => {
  return (
    <div className='d-flex flex-column w-100 align-items-center'>
        <div className='w-25' style={{ display: 'flex', gap:'25px',justifyContent:'center' }}>
            <Spinner animation="grow" variant='success' />
            <Spinner animation="grow" variant='success'/>
            <Spinner animation="grow" variant='success' />
            <Spinner animation="grow" variant='success'/>
        </div>
        <div className='w-25 text-center mt-4 text-light-emphasis'>
            <h3>Products Loading .....</h3>
        </div>
    </div>
  );
}

export default GrowExample;
