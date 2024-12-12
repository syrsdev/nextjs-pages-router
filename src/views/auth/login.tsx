import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import style from "./login.module.scss";

const LoginPageView = () => {
    const router = useRouter();
    const handleLogin = () => {
        router.push("/products");
    };
    return (
        <div className={style.login}>
            <h1 className="text-3xl font-bold text-red-700">Login</h1>
            <button onClick={() => handleLogin()}>login</button>
            <p>
                Belum punya akun ya?{" "}
                <Link href={"/auth/register"} style={{ color: "blue" }}>
                    register
                </Link>
            </p>
        </div>
    );
};

export default LoginPageView;
