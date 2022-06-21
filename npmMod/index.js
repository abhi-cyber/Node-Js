// To initalize npm in this folder run the following command in the terminal(in root folder) ---> npm init

import chalk from 'chalk';

// console.log(chalk.green.underline.inverse("success"));
// console.log(chalk.red.underline.inverse("fail"));
// console.log("")

//---------------------------------------  EMAIL VALIDATOR  -----------------------------------------------------
import validator from 'validator';

const res = validator.isEmail("abhiraj@chatrath.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));