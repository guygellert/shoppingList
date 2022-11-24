import ProductImage from '../ProductImage/ProductImage';
import './ProductItem.css'

function ProductItem(props) {

    return (
        <div className='product-item' onClick={props.onClick}>
            <div>
                <div className="product-item__description ">{props.title}</div>
                <div className="product-item__price">{props.price} ₪</div>
            </div>
            <ProductImage url={props.url}></ProductImage>
        </div>
    );
}

export default ProductItem;