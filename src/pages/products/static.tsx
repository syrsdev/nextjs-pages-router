import { ProductsType } from "@/type/products.type";
import ProductsView from "@/views/products";

const ProductsStaticPage = (props: { products: ProductsType[] }) => {
    const { products } = props;
    console.log(products);

    return <ProductsView products={products} />;
};

export default ProductsStaticPage;

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/products");
    const respon = await res.json();
    return {
        props: {
            products: respon.data,
        },
    };
}
