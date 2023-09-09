import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQueryTest from '../components/ReactQueryTest';
import { useQueryClient } from '@tanstack/react-query';

export default function Products() {
  const navigate = useNavigate();
  const [text, setText] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setText('');
    navigate(`/products/${text}`);
  };

  /* -- React Query -- */
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);
  const client = useQueryClient();

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="product id:"
          value={text}
          onChange={handleChange}
        />
      </form>

      {/*  -- React Query -- */}
      <div>
        {showLeftProducts && <ReactQueryTest />}
        <button onClick={() => setShowLeftProducts((prev) => !prev)}>
          Toggle
        </button>
      </div>
      <div>
        {showRightProducts && <ReactQueryTest />}
        <button onClick={() => setShowRightProducts((prev) => !prev)}>
          Toggle
        </button>
      </div>
      <button
        onClick={() => {
          client.invalidateQueries(['products', false]);
        }}
      >
        Updatate
      </button>
    </main>
  );
}
