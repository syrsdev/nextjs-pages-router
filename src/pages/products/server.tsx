import { ProductsType } from "@/type/products.type";
import ProductsView from "@/views/products";

const ProductsServerPage = (props: { products: ProductsType[] }) => {
    const { products } = props;
    return <ProductsView products={products} />;
};

export default ProductsServerPage;

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/products");
    const respon = await res.json();
    return {
        props: {
            products: respon.data,
        },
    };
}
