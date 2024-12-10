import Link from "next/link";
import React from "react";

const RegisterPage = () => {
    return (
        <div>
            <h1>Register dulu</h1>

            <p>
                Sudah punya akun?{" "}
                <Link href={"/auth/login"} style={{ color: "blue" }}>
                    login
                </Link>
            </p>
        </div>
    );
};

export default RegisterPage;
