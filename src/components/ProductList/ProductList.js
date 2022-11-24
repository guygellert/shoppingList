import ProductItem from '../ProductItem/ProductItem';
import { useNavigate } from "react-router-dom";

function ProductList(props) {
    const navigate = useNavigate();
    const listItems = props.items.map((item) => {
        return <ProductItem key={item.id} title={item.title} price={item.price} url={item.url}
            onClick={() => {
                navigate(`/${item.id}`, {
                    state: {
                        title: item.title,
                        description: item.id,
                        // img: item.img,
                        // stores: item.stores[]
                    }
                })}} >
    </ProductItem>
    });
    return (
        <div>
            {listItems}
        </div>
    );
}
export default ProductList;