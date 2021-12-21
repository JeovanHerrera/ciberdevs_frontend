import React from 'react';
import FormSubscriptions from '../components/formSubscriptions';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Subscriptions_Create() {
  return (
    <div>
      <div className='self-start' >
        <Link to='/subscriptions'>
          <Button className="mt-2 ms-2">volver</Button>
        </Link>
      </div>
      <FormSubscriptions>
          
      </FormSubscriptions>
    </div>
  );
}

export default Subscriptions_Create;