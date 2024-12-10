import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductsPage = () => {
    const { push, query } = useRouter();
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, []);
    return (
        <div>
            <h1>Ini list products</h1>
        </div>
    );
};

export default ProductsPage;
