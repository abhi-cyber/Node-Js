const fs = require("fs");
const bioData = {
  name: "Abhiraj",
  age: 19,
  email: "abhirajchatrath@gmail.com",
};

// 1. Convert the obj to JSON. ==> DONE
// 2. Add it to another file. ==> DONE
// 3. readFile. ==> DONE
// 4. Convert back to objAnd at last.

// 1
const jsonData = JSON.stringify(bioData);

// 2
// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log("done");
// });

// 3
fs.readFile("json1.json", "utf-8", (err, data) => {
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});