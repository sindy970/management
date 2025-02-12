import prisma from '@/lib/prisma'
import { encrypto } from '@/utils/crypto/crypto'
import { serializeBigInt } from "@/utils/utils";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    console.log(req.url);
    console.log(searchParams);

    const id = searchParams.get("id");
    const pass = encrypto(<string>searchParams.get("password"));
    console.log(pass);
    const user = await prisma.user.findFirst({
        where: {
            id: id,
            password: pass,
        },
    })

    if (!user) {
        console.log(serializeBigInt(user))
        return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }

    // user 객체에서 password 값은 제외
    const { password, ...result } = user
    return new Response(serializeBigInt(user))
}