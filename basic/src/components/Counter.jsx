import React, { useState } from 'react';

export default function Counter({total, onclick}) {
  const [count, setCount] = useState(0);
  return (
    <div className='counter'>
        <div className="numbers">
          <span className="number">{count}</span>
          <span className="total">/{total}</span>
        </div>
        <button className="button" onClick={()=>{
          setCount((count) => count + 1);
          onclick();
        }}>Add +</button>
    </div>
  );
}

