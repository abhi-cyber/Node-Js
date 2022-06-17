const fs = require('fs')

// 1. Create a folder named TASK

// fs.mkdir("TASK", (err) => {
//     console.log('folder created')
// });

// 2. Create a file named mybio.txt and add data to it.

// fs.writeFile('./TASK/mybio.txt', 'My name is Abhiraj.', (err) => {
//     console.log('Bio file created.')
// })

// fs.appendFile('./TASK/mybio.txt', ' I am 19 years old. I am a first year student at Chitkara University.', (err) => {
//     console.log('Data added in bio file.')
// })

// 4. Read the data without getting the buffer data.

// fs.readFile('./TASK/mybio.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });

// 5. Rename the file to 'bio.txt'.

// fs.rename('./TASK/mybio.txt', './TASK/bio.txt', (err) => {
//         console.log('File name changed');
// })

// 6. Delete the bio.txt file.

// fs.unlink('./TASK/bio.txt', (err) => {
//         console.log("File removed.");
// })

// fs.rmdir('./TASK', (err) => {
//         console.log("Folder removed.");
// })