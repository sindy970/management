"use client";

import {FormEvent, useState} from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        const response = await fetch("/api/auth", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                Pragma: 'no-cache',
                Expires: '0'
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            router.push("/auth/sign-in"); // 회원가입 성공 시 로그인 페이지로 이동
        } else {
            alert("회원가입 실패!");
        }

        setLoading(false);
    };

    return (
        <>
            <body>
                <div>
                    <h1>회원 가입</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2 mt-8">
                            <label htmlFor="id">ID</label>
                            <input name="id" placeholder="영문, 숫자 8자 이상 입력해주세요" required />

                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Your password"
                                minLength={6}
                                required
                            />

                            <label htmlFor="name">이름</label>
                            <input name="name" placeholder="이름" required />

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
