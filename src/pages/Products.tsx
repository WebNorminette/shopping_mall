import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="product id:"
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
