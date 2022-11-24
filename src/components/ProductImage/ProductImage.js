// import ProductList from './ProductList';
import './ProductImage.css'
function ProductImage(props) {

    return (
        <div className="product-image">
            <img className="product-image__url" alt={ props.url } src={props.url}></img>
        </div>
    );
}

export default ProductImage;