import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import '../../css/Products.css';

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <nav className="col2">
                <ul>
                    <li>Car 1</li>
                    <li>Car 2</li>
                    <li>Car 3</li>
                    <li>Car 4</li>
                    <li>Car 5</li>
                </ul>
            </nav>
            <section className="col1">
                <ProductList products={products} />
            </section>
        </div>
    )
}