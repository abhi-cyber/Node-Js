const fs = require("fs");
const bioData = {
  name: "Abhiraj",
  age: 19,
  email: "abhirajchatrath@gmail.com",
};

// 1. Convert the obj to JSON. ==> DONE
// 2. Add it to another file. ==> Done
// 3. And at last readFile.
// 4. Convert back to obj.

// 1
const jsonData = JSON.stringify(bioData);

// 2
fs.writeFile("json1.json", jsonData, (err) => {
  console.log("done");
});
