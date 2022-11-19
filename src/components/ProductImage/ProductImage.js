// import ProductList from './ProductList';
import './ProductImage.css'
function ProductImage(props) {

    return (
        <div class="product-image">
                <img class="product-image__url" alt={ props.url } src={props.url}></img>
        </div>
    );
}

export default ProductImage;