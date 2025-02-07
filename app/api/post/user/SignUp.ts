"use server";

import prisma from '@/lib/prisma'
import { encrypto } from "@/utils/crypto/crypto";

export const signUp = async (formData: FormData) => {
    const id = formData.get("id")?.toString();
    const password = formData.get("password")?.toString() ?? "";
    const name = formData.get("name")?.toString();

    const enPassword = encrypto(password);

    try {
        const user = await prisma.user.create({
            data : {
                id : id,
                password : enPassword,
                name : name,
                auth : 2,
            },
        });

        console.log("User created:", user);
        return { success: true, user };
    } catch (error) {
        console.error("Error creating user:", error);
        return { success: false, error: "Failed to create user" };
    }
}