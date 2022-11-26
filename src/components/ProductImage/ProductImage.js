// import ProductList from './ProductList';
import './ProductImage.css'
function ProductImage(props) {

    return (
        <div className="product-image">
            <img className={props.inRow ? "product-image-in-row__url" : "product-image__url"} 
                 alt={props.title} 
                 src={props.url}>
            </img>
        </div>
    );
}

export default ProductImage;