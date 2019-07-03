"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const WebSocket = __importStar(require("ws"));
const app = express_1.default();
const port = 8080; // default port to listen
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
// // start the Express server
// app.listen( port, () => {
//     console.log( `server started at http://localhost:${ port }` );
// } );
// Start the websocket server
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
wss.on("connection", (ws) => {
    // connection is up, let's add a simple simple event
    ws.on("message", (message) => {
        // log the received message and send it back to the client
        console.log("received: %s", message);
        ws.send(`Hello, you sent -> ${message}`);
    });
    // send immediatly a feedback to the incoming connection
    ws.send("Hi there, I am a WebSocket server");
});
// start our server
const wsPort = 80;
server.listen(wsPort, () => {
    console.log(`Server started on port ${wsPort} :)`);
});
//# sourceMappingURL=index.js.map