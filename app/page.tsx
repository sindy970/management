"use client"; // Next.js 13+의 app 디렉토리에서는 필수

import React from 'react'
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    const goToSignUp = () => {
        router.push("/auth/sign-up"); // 회원가입 페이지로 이동
    };

    const goToSignIn = () => {
        router.push("/auth/sign-in"); // 로그인 페이지로 이동
    };

    return (
        <>
            <main className='flex min-h-screen flex-col items-center justify-between p-24'>
                <h1 className='text-4xl font-semibold'>NextAuth Tutorial</h1>
                <div>
                    <button onClick={goToSignUp}>
                        SIGN-UP
                    </button>
                    |
                    <button onClick={goToSignIn}>
                         SIGN-IN
                    </button>
                </div>
            </main>
        </>
    );
}