import React from 'react';
import { functionExpression } from '@babel/types';

function Square(props) {
  return (
    <button className="square" 
       onClick={props.onClick}>
      {props.value}
    </button>
  );
}

  export default Square;