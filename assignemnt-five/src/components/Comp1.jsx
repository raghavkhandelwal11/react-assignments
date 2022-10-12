import React from 'react';
import newComponent from './newComponent';

function Comp1(props) {
    let { count, method } = props;
  return (
    <div>
        <button className='btn btn-outline-secondary' onClick={method}>button from component 1 clicked {count} times</button>
    </div>
  )
}

export default newComponent(Comp1);