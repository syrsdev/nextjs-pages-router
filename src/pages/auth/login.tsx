import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LoginPage = () => {
    const router = useRouter();
    const handleLogin = () => {
        router.push("/products");
    };
    return (
        <div>
            <h1>Login</h1>
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

export default LoginPage;
