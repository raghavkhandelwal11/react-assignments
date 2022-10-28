import React from 'react';
import ContextVariable from './context';
import { useContext } from 'react';

const Component1 = () => {

  let data = useContext(ContextVariable);
  
  return (
        <h3>The data reveived using context API is : {data}</h3>
  )
}

export default Component1;