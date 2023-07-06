import { useState } from 'react';
import './App.css';
import Products from './components/Products';

export default function AppProducts() {
  const [showProducts, setShoeProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products/>}
      <button onClick={()=> setShoeProducts((show) => !show)}>Toggle</button>
    </div>
  );
}
