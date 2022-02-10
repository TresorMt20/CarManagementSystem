import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[];
}

export default function ProductList({ products }: Props) {
    return (
       
        <>
            {products.map(product => (
                <div  key={product.id}>
                    <ProductCard product={product} />
                </div>
            ))}
        </>
    )
}