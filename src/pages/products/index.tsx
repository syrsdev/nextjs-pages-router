import { fetcher } from "@/lib/swr/fetcher";
import ProductsView from "@/views/products";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const ProductsPage = () => {
    const { push, query } = useRouter();
    console.log(query);
    const [isLogin] = useState(true);
    // const [data, setData] = useState([]);
    useEffect(() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, []);

    const { data, error, isLoading } = useSWR("/api/products", fetcher);
    console.log(error);

    // useEffect(() => {
    //     fetch("/api/products")
    //         .then((res) => res.json())
    //         .then((respons) => {
    //             setData(respons.data);
    //         });
    // }, []);
    return <ProductsView products={isLoading ? [] : data.data} />;
};

export default ProductsPage;
