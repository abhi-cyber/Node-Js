// Event module
// Node.js has a built-in module, called "Event".
// where you can create-, fire-, and listen for- your own events.

const EventEmitter = require("events");
const http = require("http");
const event = new EventEmitter(); // Obj. created

// Example 1:- Registering for the event to be fired only one time using once.

// event.on("whatsMyName", () => { // ".on" is a listner
//     console.log("Your name is Abhiraj.");
// });

// event.emit("whatsMyName");

// Note:- First you need to set the listner and then emit it or it will not work.

// Example 2:- Create an event emitter instance and register a couple of callbacks.

// event.on("whatsMyName", () => { // ".on" is a listner
//     console.log("Your name is Abhiraj.");
// });

// event.on("whatsMyName", () => { // ".on" is a listner
//     console.log("Your name is Singh.");
// });

// event.on("whatsMyName", () => { // ".on" is a listner
//     console.log("Your name is Chatrath.");
// });

// event.emit("whatsMyName");

// Example 3:- Registering for the event with callback parameters

event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}.`);
})
event.emit("checkPage", 200, 'ok');
