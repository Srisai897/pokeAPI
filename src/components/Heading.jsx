import {Navbar} from 'react-bootstrap'

export default function Heading() {
  return (
    <Navbar className='bg-danger'>
      <h2 className='text-warning' style={{fontWeight: "bolder", marginLeft: "5rem"}}>
        Pokemon
      </h2>
    </Navbar>
  )
}
