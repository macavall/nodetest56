const { app } = require('@azure/functions');

app.http('http1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        if(context){
            console.contextError = context.log.errorX
            console.contextWarn = context.log.warnX
            console.contextInfo = context.log.infoX
            console.contextDebug = context.log.debugX
        }

        console.errorX = "Error";
        console.warnX = "Warning";
        console.infoX = "Info";
        console.debugX = "Debug";  

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };
    }
});
