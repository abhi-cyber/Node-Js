// Notes : -
// 1. JSON stands for Javascript Object Notification. JSON is lightweight format 
// for storing and transporting data.
// 2. JSON is often used when data is sent from a server to a web page.

// ------------------------ CONVERTING OBJECT TO JSON ------------------------------------------------

// Object
const bioData = {
    name : "Abhiraj",
    age : 19,
    email: 'abhirajchatrath@gmail.com'
};
console.log(bioData.name);

// Json format
const jsonData = JSON.stringify(bioData);
console.log(jsonData);
const objData = JSON.parse(jsonData); // will convert the data into obj so that is can be displayed
console.log(objData.name);