import * as cheerio from "cheerio";


export async function getHoroscope(zodiac) {

    const url = `https://www.astrocafe.ro/zodia-${zodiac}`;

    const response = await fetch(url);

    const html = await response.text();


    const $ = cheerio.load(html);


    const text = $(".zodie-box-in-left p").text();


    return text;

}