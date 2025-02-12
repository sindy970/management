"use client";

import {FormEvent, useState} from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        const response = await fetch(`/api/auth/login?id=${data.id}&password=${data.password}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            alert("로그인 성공!"); // 회원가입 성공 시 로그인 페이지로 이동
        } else {
            alert("로그인 실패!");
        }

        setLoading(false);
    };

    return (
        <>
            <body>
            <div>
                <h1>LOGIN</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2 mt-8">
                        <label htmlFor="id">ID</label>
                        <input name="id" required />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            minLength={6}
                            required
                        />

                        <button type="submit" disabled={loading}>
                            {loading ? "Signing up..." : "Sign up"}
                        </button>
                    </div>
                </form>
            </div>
            </body>
        </>
    );
}
