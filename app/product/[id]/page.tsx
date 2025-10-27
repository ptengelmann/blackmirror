import { PRODUCTS } from '@/lib/products';
import ProductClient from './ProductClient';

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage() {
  return <ProductClient />;
}
