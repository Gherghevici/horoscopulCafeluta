import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
    to,
    name,
    zodiac,
    horoscope
}) {
    name = name[0].toUpperCase()+name.slice(1);
    zodiac = zodiac[0].toUpperCase()+zodiac.slice(1);
    await resend.emails.send({
        from: "Horoscopul Cafeluta <noreply@horoscopulcafeluta.com>",
        to,
        subject: "Horoscopul Cafeluta ☕",

        html: `
        <head>
            <meta name="color-scheme" content="light dark">
            <meta name="supported-color-schemes" content="light dark">

            <style>
                :root {
                    color-scheme: light dark;
                }
                @media (prefers-color-scheme: light) {

                    body {
                        background:#000000 !important;
                    }

                    .card {
                        background:#1a1715 !important;
                    }

                    .text {
                        color:#ded7c8 !important;
                    }
                }
            </style>
        </head>
            <div style="
                margin:0;
                padding:40px 20px;
                background:#000000;
                font-family: Arial, Helvetica, sans-serif;
            ">

                <div style="
                    max-width:600px;
                    margin:0 auto;
                    background:#1a1715;
                    border-radius:24px;
                    overflow:hidden;
                    border:1px solid #422006;
                ">


        <!-- HEADER -->

        <div style="
            background:#ded7c8;
            padding:35px 30px;
            text-align:center;
        ">

            <div style="
                font-size:42px;
                margin-bottom:10px;
            ">
                ☕✨
            </div>

            <h1 style="
                margin:0;
                color:#000000;
                font-size:28px;
                font-weight:700;
                letter-spacing:-0.5px;
            ">
                Horoscopul Cafeluța
            </h1>

            <p style="
                margin:12px 0 0;
                color:#422006;
                font-size:14px;
            ">
                Cafeaua ta de dimineață, cu puțină magie ✨
            </p>

        </div>



        <!-- CONTENT -->


        <div style="
            padding:40px 35px;
            color:#ded7c8;
        ">


            <h2 style="
                margin:0 0 20px;
                font-size:24px;
                color:#ffffff;
            ">
                Bună, ${name}! 👋
            </h2>



            <div style="
                display:block;
                background:#422006;
                border-radius:16px;
                padding:18px;
                text-align:center;
                margin-bottom:30px;
            ">

                <p style="
                    margin:0;
                    color:#fde68a;
                    font-size:14px;
                    text-transform:uppercase;
                    letter-spacing:2px;
                ">
                    Zodia ta
                </p>


                <h3 style="
                    margin:10px 0 0;
                    color:#ffffff;
                    font-size:26px;
                ">
                    ${zodiac}
                </h3>


            </div>




            <div style="
                background:#0f0f0f;
                border-radius:16px;
                padding:25px;
                border-left:4px solid #713f12;
            ">


                <p style="
                    margin:0;
                    color:#e7e5e4;
                    line-height:1.7;
                    font-size:16px;
                ">
                    ${horoscope}
                </p>


            </div>



            <p style="
                margin-top:35px;
                text-align:center;
                color:#a8a29e;
                font-size:15px;
            ">
                O zi frumoasă și spor la cafeluță ☕!
            </p>


        </div>



        <!-- FOOTER -->


        <div style="
            background:#000000;
            padding:20px;
            text-align:center;
        ">


            <p style="
                margin:0;
                color:#78716c;
                font-size:12px;
            ">
                Primești acest email deoarece te-ai abonat la
                Horoscopul Cafeluța ✨
            </p>


        </div>



    </div>

</div>
        `
    });

}