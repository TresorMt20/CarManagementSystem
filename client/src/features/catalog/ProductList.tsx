import { Product } from '../../app/models/product';
import { useAppSelector } from '../../app/store/configureStore';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

interface Props {
    products: Product[];
}

export default function ProductList({ products }: Props) {
    const { productsLoaded } = useAppSelector(state => state.catalog);
    return (
        <>
            <>
                {products.map(product => (
                    <div key={product.id}>
                        {!productsLoaded ? (
                            <ProductCardSkeleton />
                        ) : (
                            <ProductCard product={product} />
                        )}
                    </div>
                ))}
            </>
        </>
    );
}