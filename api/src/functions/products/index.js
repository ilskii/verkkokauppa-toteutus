const { app } = require('@azure/functions');
const { GET } = require('./methods/GET');
const { POST } = require('./methods/POST');
const { DELETE } = require('./methods/DELETE');
const { PUT } = require('./methods/PUT');

app.http('products', {
    methods: ['GET', 'POST', 'PUT', 'DELETE'], //käytettävät metodit määritellään tässä, muuten sitä ei ole olemassa
    authLevel: 'anonymous',
    route: "products/{id?}",
    handler: async (request, context) => {

        //try-catch -virheenkäsittely, muista testata Postmanilla että toimiiko

        try{

            //switch statement / switch..case

            let response;

            switch(request.method) {

                case "GET": //"GET", "get" on eri asia
                    response = await GET(context);
                    return response;

                case "POST":
                    response = await POST(request, context);
                    return response;

                case "PUT":
                    response = await PUT(request, context);
                    return response;

                case "DELETE":
                    response = await DELETE(request, context);
                    return response;

                default:
                    context.log("Bad method!");
                    return { status: 400, body: "Bad request." }
            }
        }

        catch(error) {
            return { status: 500, body: "Internal server error" }
        }
    }
});