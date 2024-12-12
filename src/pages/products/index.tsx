import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type itemType = {
    id: number;
    name: string;
    price: number;
    size: string;
};

const ProductsPage = () => {
    const { push, query } = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, []);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((respons) => {
                setData(respons.data);
            });
    }, []);
    return (
        <div>
            <h1>Ini list products</h1>
            <ul>
                {data.map((item: itemType) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsPage;
