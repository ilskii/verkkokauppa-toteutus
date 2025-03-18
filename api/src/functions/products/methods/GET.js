const axios = require("axios"); //otetaan axios-kirjasto käyttöön

async function GET(context) {
    context.log("GET.js aloitetaan...");

    const response = await axios.get("http://localhost:4000/products"); //otetaan axios käyttöön, "await" odottaa Promisea (objekti, jonka asynkroninen funktio palauttaa)
    return { status: 200, jsonBody: response.data };
}

module.exports = { GET };