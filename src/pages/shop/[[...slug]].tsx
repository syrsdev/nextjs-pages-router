import { useRouter } from "next/router";
import React from "react";

const Shop = () => {
    const { query } = useRouter();
    // const route = useRouter();
    console.log(query.slug);

    return (
        <div>
            <h1>Ini Product di shop ku</h1>
            <p>Product : {query.slug ? query.slug[0] : "tidak ada"}</p>
        </div>
    );
};

export default Shop;
