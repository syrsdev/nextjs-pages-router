import { useRouter } from "next/router";
import React from "react";

const DetailProduct = () => {
    const { query } = useRouter();
    // const route = useRouter();
    return (
        <div>
            <h1>Ini Product ku</h1>
            <p>Product : {query.slug}</p>
        </div>
    );
};

export default DetailProduct;
