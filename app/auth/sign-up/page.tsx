"use client";

import {FormEvent, useState} from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const [loading, setLoading] = useState(false);
    const [idLoading, setIdLoading] = useState(false);
    const router = useRouter();

    const idChackSubmit = async (event: FocusEvent<HTMLElement>) => {

        const idInput = event.target as HTMLInputElement;
console.log(idInput.value)
            const response = await fetch(`/api/auth?id=${idInput.value}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    Pragma: 'no-cache',
                    Expires: '0'
                },
            });

            if (response.status === 200) {
                setIdLoading(true);
            }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        if(!idLoading){
            alert("사용 불가한 아이디 입니다.");
            setLoading(false);
            return event.target.querySelector("#id").focus();
        }

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
                <div>
                    <h1>회원 가입</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2 mt-8">
                            <label htmlFor="id">ID</label>
                            <input id="id" name="id" onBlur={idChackSubmit} placeholder="영문, 숫자 8자 이상 입력해주세요" required />
                            {idLoading ?
                                <label>사용 가능한 아이디 입니다.</label> :
                                <label>사용 불가한 아이디 입니다.</label>
                            }

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
        </>
    );
}
