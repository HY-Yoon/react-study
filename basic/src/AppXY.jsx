import React, { useEffect, useRef, useState } from 'react';
import './AppXY.css'

export default function AppXY() {
  const [positions, setPositions] = useState({clientX : 0, clientY: 0});

  const pointer = useRef();

  useEffect(() => {
    pointer.current.style.left = `${positions.clientX - 15}px`;
    pointer.current.style.top = `${positions.clientY - 15}px`;
  },[positions])

  return (
    <div 
      className="container" 
      onMouseMove={(evt) => {
        const { clientX, clientY } = evt;
        setPositions({ clientX, clientY });
      }}
    >
        <div ref={pointer} className="pointer"></div>
    </div>
  );
}

