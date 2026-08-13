
import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ product }) => (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <Link href={`/products/${product.id}`}>
      <Image className="rounded-t-lg" src={product.image} alt={product.name} width={400} height={300} />
    </Link>
    <div className="p-5">
      <Link href={`/products/${product.id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{product.name}</h5>
      </Link>
      <p className="mb-3 font-normal text-gray-700">{product.description}</p>
      <Link href={`/products/${product.id}`} className="inline-flex items-center px-3 py-2 text-xl font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-hover hover:text-white">
        Read more
      </Link>
    </div>
  </div>
);

export default ProductCard;
