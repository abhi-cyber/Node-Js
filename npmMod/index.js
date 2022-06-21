// To initalize npm in this folder run the following command in the terminal(in root folder) ---> npm init

import chalk from 'chalk';

// console.log(chalk.green.underline.inverse("success"));
// console.log(chalk.red.underline.inverse("fail"));
// console.log("")

//---------------------------------------  EMAIL VALIDATOR  -----------------------------------------------------
import validator from 'validator';

// const res = validator.isEmail("abhiraj@chatrath.com");
// console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

// ------------------------------------ LIVE VALIDATOR USING NODEMON MODULE ------------------------------

// NODEMON :- It is a global package that automatically restarts the node application when there is change in the code/directory.
// run the code with the following command --> 'nodemon index.js'

const res = validator.isEmail("abhiraj@chatrathcom");
// on changing the above value the node will restart itself
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));