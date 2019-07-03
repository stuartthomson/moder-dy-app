import express from "express";
import * as http from "http";
import * as WebSocket from "ws";

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello stuart!" );
} );

// // start the Express server
// app.listen( port, () => {
//     console.log( `server started at http://localhost:${ port }` );
// } );

// Start the websocket server
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

wss.on("connection", (ws: WebSocket) => {
    console.log('connection!');
    // connection is up, let's add a simple simple event
    ws.on("message", (message: string) => {

        // log the received message and send it back to the client
        console.log("received: %s", message);
    });

    // send immediatly a feedback to the incoming connection
    ws.send("This is some text sent via websockets from back to front");
});

// start our server
const wsPort = 88;
server.listen( wsPort, () => {
    console.log(`Server started on port ${wsPort} :)`);
});
