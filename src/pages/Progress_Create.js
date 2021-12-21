import React from 'react';
import FormProgress from '../components/formProgress';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Progress_Create() {
  return (
    <div>
      <div className='self-start' >
        <Link to='/progress'>
          <Button className="mt-2 ms-2">volver</Button>
        </Link>
      </div>
      <FormProgress>
          
      </FormProgress>
    </div>
  );
}

export default Progress_Create;