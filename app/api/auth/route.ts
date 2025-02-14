import prisma from '@/lib/prisma'
import { encrypto } from '@/utils/crypto/crypto'
import {serializeBigInt} from "@/utils/utils";

interface RequestBody {
    id: string;
    name: string;
    password: string;
}

export async function POST(request: Request) {
    const body: RequestBody = await request.json()
    const pas : string = encrypto(body.password)

    const users = await prisma.user.create({
        data: {
            id: body.id,
            name: body.name,
            password: pas,
        },
    })

    // user 객체에서 password 값은 제외
    const { password, ...result } = users
    return new Response(serializeBigInt(users))
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const user = await prisma.user.findFirst({
        where: {
            id: id,
        },
    })

    if(!user){
        return new Response("Ok",{status : 200 , message : "Ok"});
    } else {
        return new Response("Already" ,{status : 400, message : "Already exists."});
    }
}