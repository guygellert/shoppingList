import { useLocation } from 'react-router-dom';
import ProductImage from '../ProductImage/ProductImage';
import './ProductDetails.css'

function ProductDetails(state) {
    const location = useLocation();

    return ( 
        <div className="product-details">
            <div className="product-details__header">
                <div className="product-details__title">{location.state.title}</div>
                <div className="product-details__description">{location.state.description}</div>
            </div>  
            <div className="product-details__body">
                <div>Product available in: {location.state.store}</div>
                <ProductImage url={location.state.img} />  
            </div>  
        </div>
     );
}

export default ProductDetails;