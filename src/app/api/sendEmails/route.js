import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";
import {getHoroscope} from '../../../lib/horoscop'


export async function GET() {

    try {

        const subscribers = await prisma.subscriber.findMany();

        for (const subscriber of subscribers) {
            const data = await getHoroscope(subscriber.zodiac);

            await sendEmail({
                to: subscriber.email,
                name: subscriber.name,
                zodiac: subscriber.zodiac,
                horoscop:data
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
