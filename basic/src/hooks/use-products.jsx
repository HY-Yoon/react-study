import { useEffect, useState } from "react";

export default function useProducts({salesOnly}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('데이터 받아옴');
        setProducts(data);
      })
      .catch((error) => setError('에러 발생'))
      .finally(() => setLoading(false));
    return () => {
      console.log('컴포넌트가 없어질때 동작');
    }
  }, [salesOnly]);

  return [loading, error, products];
}