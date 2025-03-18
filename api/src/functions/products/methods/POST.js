const axios = require("axios"); //otetaan axios-kirjasto käyttöön
const { v4: uuidv4 } = require('uuid'); //otetaan uuid-kirjasto käyttöön (v4: luodaan ID:t satunnaisluvuilla), käytössä CommonJS

async function POST(request, context) {

    try {
        context.log("GET.js aloitetaan...");
        let body = await request.json();

        if(!body || !body.name || !body.price) {
            return { status: 400, body: "Missing name or price." };
        }

        const newProduct = {
            id: uuidv4(),
            name: body.name,
            price: Number(body.price)
        }

        await axios.post("http://localhost:4000/products", newProduct);
        return { status: 201, jsonBody: newProduct };
    }

    catch(error) {
        context.log(error);
        return { status: 400, body: "Something went wrong." };
    }
}

module.exports = { POST };