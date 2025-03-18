const axios = require("axios"); //otetaan axios-kirjasto käyttöön

async function PUT(request, context) {
    
    try {
        context.log("PUT.js aloitetaan...");
        const id = request.params.id;
        let body = await request.json();

        if(!body || !body.name || !body.price || !id) {
            //return { status 400, body: "Bad request." };
            return { status: 400, body: "Missing name, price or id." };
        }

        let updatedProduct = {
            id: id,
            name: body.name,
            price: body.price
        }

        await axios.put(`http://localhost:4000/products/${id}`, updatedProduct);
        return { status: 201, jsonBody: updatedProduct };
    }

    catch(error) {
        context.log(error);
        return { status: 400, body: "Something went wrong." };
    }
    
}

module.exports = { PUT };