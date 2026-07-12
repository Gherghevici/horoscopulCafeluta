import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
    to,
    name,
    zodiac,
    horoscop
}) {

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to,
        subject: "Horoscopul zilei",

        html: `
            <h1>Bună, ${name}!</h1>

            <p>
            ${horoscop}
            </p>

            <h2>${zodiac}</h2>

            <p>
            O zi frumoasă!
            </p>
        `
    });

}