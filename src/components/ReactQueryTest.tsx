import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: string;
}

export default function ReactQueryTest() {
  const [checked, setChecked] = useState<boolean>(false);
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(
    ['products', checked],
    async () => {
      console.log('fetching..');
      const response = await axios.get(
        `data/${checked ? 'sale_' : ''}products.json`
      );
      return response.data;
    },
    {
      // staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      // refetchOnMount: false,
    }
  );

  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) return <p>Loading...</p>;

  if (error instanceof Error) return <p>{error.message}</p>;

  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only Sale</label>
      <ul>
        {products?.length > 0 ? (
          products.map((product: Product) => (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          ))
        ) : (
          <p>No products </p>
        )}
      </ul>
    </>
  );
}
