import ProductItem from '../ProductItem/ProductItem';
function ProductList(props) {
    const listItems = props.items.map((item) => {
        return <ProductItem title={item.title} price={item.price} url={item.url}></ProductItem>
    });
    return (
        <div>
            {listItems}
        </div>
    );
}
export default ProductList;