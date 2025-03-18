const axios = require("axios"); //otetaan axios-kirjasto käyttöön

async function DELETE(request, context) {
    
    try {
    context.log("DELETE.js aloitetaan...");
    const id = request.params.id;

    if(!id) {
        return { status: 400, body: "ID missing." };
     }
    
    await axios.delete(`http://localhost:4000/products/${id}`);
    return { status: 204 };
    }
    
    catch(error) {
        context.log(error);
        return { status: 204 };
    }
    
}

module.exports = { DELETE };