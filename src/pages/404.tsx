import React from "react";
import style from "@/styles/404.module.scss";
import Head from "next/head";

const NotFoundPage = () => {
    return (
        <>
            <Head children={undefined}></Head>
            <div className={style.error}>
                <img src="/404.svg" alt="404" className={style.error_img} />
                <h1>Gak ada nih page yang kamu cari</h1>
            </div>
        </>
    );
};

export default NotFoundPage;
