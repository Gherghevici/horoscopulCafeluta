import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";
import {getHoroscope} from '../../../lib/horoscop'


export async function GET(request) {
   const authHeader = request.headers.get("authorization");

    if (
        process.env.NODE_ENV === "production" &&
        authHeader !== `Bearer ${process.env.CRON_SECRET}`
    ) {
        return Response.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }
    try {
        const zodiacSigns = [
            "berbec",
            "taur",
            "gemeni",
            "rac",
            "leu",
            "fecioara",
            "balanta",
            "scorpion",
            "sagetator",
            "capricorn",
            "varsator",
            "pesti"
        ];
        const horoscopes = {};

        for (const zodiac of zodiacSigns) {
            horoscopes[zodiac] = await getHoroscope(zodiac);
        }
        console.log(horoscopes)
         const subscribers = await prisma.subscriber.findMany();
        console.log(subscribers[0].zodiac)
        for (const subscriber of subscribers) {
            const horoscope = horoscopes[subscriber.zodiac];

            await sendEmail({
                to: subscriber.email,
                name: subscriber.name,
                zodiac: subscriber.zodiac,
                horoscope
            });

        }


        return Response.json({
            success:true,
            sent: subscribers.length
        });


    } catch(error) {

        console.error(error);

        return Response.json(
            {
                error:error.message
            },
            {
                status:500
            }
        );

    }
   
}
