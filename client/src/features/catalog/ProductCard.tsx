import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";
import '../../css/Products.css';

interface Props {
    product: Product
}

export default function ProductCard({ product }: Props) {
    return (
        <div className="card" key={product.id}>
        <Link to={`/product/${product.id}`}>
            <img src={product.pictureUrl} alt=""/>
        </Link>
        <div className="content">
            <h3>
                <Link to={`/product/${product.id}`}>{product.model}</Link>
            </h3>
            <span>${product.pricePerDay}</span>
            <p>{product.description}</p>
        </div>
    </div>
    )
}