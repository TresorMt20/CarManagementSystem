import { LoadingButton } from '@mui/lab';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Product } from '../../app/models/product';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { currencyFormat } from '../../app/util/util';
import { addBasketItemAsync } from '../basket/basketSlice';
import '../../css/Products.css';

interface Props {
    product: Product
}

export default function ProductCard({ product }: Props) {
    const {status} = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();

    return ( 
        <div key={product.id} className="card">
            <h3> 
                <Link to={`/product/${product.id}`}>{product.model}</Link>
            </h3> 
            <div className="col1">
       
                <Link to={`/product/${product.id}`}>
                    <img className="img medium" src={product.pictureUrl} alt=""/>
            
                </Link>

            </div>
            <div className="col2">
           
                <span>${product.pricePerDay}</span>
                <p>{product.description}</p>
                <CardActions>
                    <LoadingButton
                        loading={status.includes('pendingAddItem' + product.id)}
                        onClick={() => dispatch(addBasketItemAsync({productId: product.id}))}
                        size="small">
                    Add to cart
                    </LoadingButton>
                    <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
                </CardActions>
            </div>
        </div>
    );
}