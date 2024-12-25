import React from "react";
import styles from "./products.module.scss";
import { ProductsType } from "@/type/products.type";


const ProductsView = ({ products }: { products: ProductsType[] }) => {
    return (
        <div className={styles.products}>
            <h1 className={styles.products__title}>Products</h1>
            <div className={styles.products__content}>
                {products.length === 0 ? (
                    <div className={styles.products__content__skeleton}>
                        <div
                            className={
                                styles.products__content__skeleton__image
                            }
                        />
                        <div
                            className={styles.products__content__skeleton__name}
                        />
                        <div
                            className={
                                styles.products__content__skeleton__category
                            }
                        />
                        <div
                            className={
                                styles.products__content__skeleton__price
                            }
                        />
                    </div>
                ) : (
                    <>
                        {products.map((item) => (
                            <div
                                key={item.id}
                                className={styles.products__content__item}
                            >
                                <div
                                    className={
                                        styles.products__content__item__image
                                    }
                                >
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <h4
                                    className={
                                        styles.products__content__item__name
                                    }
                                >
                                    {item.name}
                                </h4>
                                <p
                                    className={
                                        styles.products__content__item__category
                                    }
                                >
                                    {item.category}
                                </p>
                                <p
                                    className={
                                        styles.products__content__item__price
                                    }
                                >
                                    {item.price.toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                    })}
                                </p>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductsView;
