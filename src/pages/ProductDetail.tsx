import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { productId } = useParams();
  return <div>About : {productId}</div>;
}
