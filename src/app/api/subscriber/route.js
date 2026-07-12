import { prisma } from "@/lib/prisma";

export async function POST(request) {
    try {
        const body = await request.json();

        const subscriber = await prisma.subscriber.create({
            data: {
                name: body.name,
                email: body.email,
                zodiac: body.zodiac
            }
        });

        return Response.json({
            success: true,
            subscriber
        });

    } catch (error) {
        return Response.json(
            {
                success: false,
                error: error.message
            },
            {
                status: 500
            }
        );
    }
}