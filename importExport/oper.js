const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};

const name = "Abhiraj";

// Exporting the above func/module

module.exports.add = add;
module.exports.sub = sub;
// module.exports = name;