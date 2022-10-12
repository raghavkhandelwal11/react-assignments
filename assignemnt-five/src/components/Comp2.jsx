import React from 'react';
import newComponent from './newComponent';

function Comp2(props) {
    let { count, method } = props;
  return (
    <div>
        <button className='btn btn-outline-secondary' onClick={method}>button from component 2 clicked {count} times</button>
    </div>
  )
}

export default newComponent(Comp2);