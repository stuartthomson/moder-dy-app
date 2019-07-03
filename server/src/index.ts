import express from "express";
import * as http from "http";
import * as WebSocket from "ws";
import * as bodyParser from 'body-parser';

const app = express();
const port = 8080; // default port to listen

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello stuart!" );
} );


// // Start the clientwebsocket server
const server = http.createServer(app);
const wss = new WebSocket.Server({server: server});

wss.on("connection", (ws: WebSocket) => {
    console.log('connection!');
    // connection is up, let's add a simple simple event
    ws.on("message", (message: string) => {
        
        // log the received message and send it back to the client
        console.log("received: %s", message);
        ws.send(message);
    });
    
    ws.on('new_line', (evt) => {
        ws.send('TEST');
        console.log(evt, 'HIHIHI');
    });
    
    
});

// // start our server
const displayerWsPort = 88;
server.listen( displayerWsPort, () => {
    console.log(`Displayer Server started on port ${displayerWsPort} :)`);
});

// // start the Express server



app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );


app.post("/line", (req, res) => {
    console.log('something is here', req.body);
    wss.clients.forEach( function each(ws) {
        ws.send(req.body.line)
    })
    res.send('OK');
});