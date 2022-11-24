import { useLocation } from 'react-router-dom';
import ProductImage from '../ProductImage/ProductImage';
import StoresList from '../StoresList/StoresList';
import './ProductDetails.css'

function ProductDetails(state) {
    const location = useLocation();

    return ( 
        <div>
            <div className="product-details">
                <div className="product-details__body">
                    <div className="product-details__title">{location.state.title}</div>
                    <div className="product-details__description">{location.state.description}</div>
                </div>             
                <ProductImage url='https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png' />   
            </div>
            <StoresList />
        </div>
     );
}

export default ProductDetails;