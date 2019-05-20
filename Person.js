import React from 'react';

const Person=(props)=> {
  return (
    <div>
      <p>How are you {props.name}</p>
      <input type="text" onChange={props.changed} />
    </div>
  )
}

export default Person;
