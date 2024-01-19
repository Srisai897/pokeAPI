import {Spinner} from 'react-bootstrap';

export default function Loading() {
  return (
    <div className='m-4 display-4'>Loading {" "}
        <Spinner animation='grow' variant='dark' size='sm'/>
        <Spinner animation='grow' variant='dark' size='lg' />
    </div>
  )
}
